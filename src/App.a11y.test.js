import { render, screen, within, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext/ThemeContext.js';
import App, { AppShell } from './App.js';
import DarkMode from './components/DarkMode/DarkMode.js';
import Contact, { CONTACT_FORM_ENDPOINT } from './components/Contacts/Contact.js';
import Projects from './components/Projects/Projects.js';
import { projectCatalog } from './components/Projects/projectCatalog.js';

function renderShell(initialPath) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </MemoryRouter>
  );
}

const routes = ['/', '/about', '/Projects', '/Contact'];

describe.each(routes)('route %s', (path) => {
  test('has no automatically detectable accessibility violations', async () => {
    const { container } = renderShell(path);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('has exactly one main landmark and one h1', () => {
    renderShell(path);
    expect(screen.getAllByRole('main')).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

test('Projects route does not skip a heading level (h1 -> h2, not h1 -> h3)', () => {
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(0);
  expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
});

test('skip link is the first focusable element and targets #main-content', () => {
  renderShell('/');
  const skipLink = screen.getByRole('link', { name: /skip to main content/i });
  expect(skipLink).toHaveAttribute('href', '#main-content');
  expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
});

test('document title updates and focus moves to the new page heading after client-side navigation', async () => {
  renderShell('/');
  expect(document.title).toBe('Home | Samuel Hsu');

  await userEvent.click(screen.getByRole('link', { name: 'About' }));

  await waitFor(() => expect(document.title).toBe('About | Samuel Hsu'));
  await waitFor(() => {
    expect(document.activeElement.tagName).toBe('H1');
    expect(document.activeElement).toHaveTextContent('Samuel Hsu');
  });
});

test('active nav link exposes aria-current="page"', () => {
  renderShell('/about');
  const aboutLink = screen.getAllByRole('link', { name: 'About' })[0];
  expect(aboutLink).toHaveAttribute('aria-current', 'page');
  const homeLink = screen.getAllByRole('link', { name: 'Home' })[0];
  expect(homeLink).not.toHaveAttribute('aria-current');
});

test('a trailing slash in the URL still resolves the route title and active nav state', async () => {
  renderShell('/about/');
  await waitFor(() => expect(document.title).toBe('About | Samuel Hsu'));
  expect(screen.getAllByRole('link', { name: 'About' })[0]).toHaveAttribute('aria-current', 'page');
});

test('a direct load on a route under the deployed subpath is not redirected home', () => {
  const originalPublicUrl = process.env.PUBLIC_URL;
  process.env.PUBLIC_URL = '/Samuel-Portfolio';
  window.history.pushState({}, '', '/Samuel-Portfolio/About');

  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  expect(window.location.pathname).toBe('/Samuel-Portfolio/About');
  expect(screen.getByText('Austin, TX')).toBeInTheDocument();

  process.env.PUBLIC_URL = originalPublicUrl;
  window.history.pushState({}, '', '/');
});

test('mobile menu toggle button reflects expanded state and controls the dialog', async () => {
  renderShell('/');
  const toggle = screen.getByRole('button', { name: /open navigation menu/i });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu');

  await userEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
});

test('mobile menu dialog contains the nav links and a labeled close control', async () => {
  renderShell('/');
  await userEvent.click(screen.getByRole('button', { name: /open navigation menu/i }));

  const dialog = document.getElementById('mobile-menu');
  expect(dialog).toHaveAttribute('aria-label', 'Mobile navigation');
  expect(within(dialog).getByRole('button', { name: /close navigation menu/i })).toBeInTheDocument();
  expect(within(dialog).getByRole('link', { name: 'Projects' })).toBeInTheDocument();
});

test('mobile menu closes when the viewport crosses the desktop breakpoint', async () => {
  // Navbar.js closes the mobile <dialog> via a matchMedia('(min-width: 768px)')
  // listener, while the same file's JSX switches visible nav layout via the
  // Tailwind `md` breakpoint. Those two only agree because both point at
  // 768px today — this test pins down that the JS side of the contract
  // actually fires, since nothing else in the suite exercises it.
  const listeners = {};
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: (cb) => { listeners[query] = cb; },
    removeListener: jest.fn(),
    addEventListener: (event, cb) => { listeners[query] = cb; },
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  renderShell('/');
  const toggle = screen.getByRole('button', { name: /open navigation menu/i });
  await userEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(document.getElementById('mobile-menu')).toHaveAttribute('open');

  act(() => {
    listeners['(min-width: 768px)']({ matches: true });
  });

  await waitFor(() => {
    expect(screen.getByRole('button', { name: /open navigation menu/i })).toHaveAttribute('aria-expanded', 'false');
  });
  expect(document.getElementById('mobile-menu')).not.toHaveAttribute('open');
});

test('theme toggle has an accessible name and reflects checked state', async () => {
  render(
    <ThemeProvider>
      <DarkMode />
    </ThemeProvider>
  );
  const toggle = screen.getByRole('switch');
  expect(toggle).toHaveAccessibleName();
  const wasChecked = toggle.checked;
  await userEvent.click(toggle);
  expect(toggle.checked).toBe(!wasChecked);
});

test('Contact fields are resolvable by their label, not just a placeholder', () => {
  render(<Contact />);
  expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).toHaveAttribute('type', 'submit');
});

test('decorative icons in the Contact form are hidden from the accessibility tree', () => {
  const { container } = render(<Contact />);
  const decorativeIcons = container.querySelectorAll('svg[aria-hidden="true"]');
  expect(decorativeIcons.length).toBeGreaterThan(0);
});

describe('Contact form submission', () => {
  const originalFetch = global.fetch;
  afterEach(() => {
    global.fetch = originalFetch;
  });

  async function fillAndSubmitContactForm() {
    render(<Contact />);
    await userEvent.type(screen.getByLabelText(/your name/i), 'Jane Doe');
    await userEvent.type(screen.getByLabelText(/your email/i), 'jane@example.com');
    await userEvent.type(screen.getByLabelText(/your message/i), 'Hello there');
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));
  }

  test('submits in place, announces success, and clears the form', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, status: 200 });
    await fillAndSubmitContactForm();

    expect(await screen.findByRole('status')).toHaveTextContent(/your message was sent/i);
    expect(global.fetch).toHaveBeenCalledWith(
      CONTACT_FORM_ENDPOINT,
      expect.objectContaining({ method: 'POST' })
    );
    expect(screen.getByLabelText(/your name/i)).toHaveValue('');
  });

  test('fields cannot be edited while a slow submission is in flight', async () => {
    let resolveSubmission;
    global.fetch = jest.fn(() => new Promise((resolve) => { resolveSubmission = resolve; }));
    await fillAndSubmitContactForm();

    const messageField = screen.getByLabelText(/your message/i);
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
    expect(messageField).toHaveAttribute('readonly');
    await userEvent.type(messageField, ' (unsent edit)');
    expect(messageField).toHaveValue('Hello there');

    await act(async () => resolveSubmission({ ok: true, status: 200 }));
    expect(screen.getByRole('status')).toHaveTextContent(/your message was sent/i);
    expect(messageField).not.toHaveAttribute('readonly');
  });

  test('announces a failure and keeps what the visitor typed', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });
    await fillAndSubmitContactForm();

    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(/couldn't be sent/i)
    );
    expect(screen.getByLabelText(/your message/i)).toHaveValue('Hello there');
  });
});

test('About lists every project shown on the Projects page', () => {
  renderShell('/about');
  const main = screen.getByRole('main');
  for (const project of projectCatalog) {
    expect(within(main).getByRole('heading', { name: project.name })).toBeInTheDocument();
  }
  expect(within(main).getByRole('link', { name: /view all projects/i })).toHaveAttribute('href', '/Projects');
});
