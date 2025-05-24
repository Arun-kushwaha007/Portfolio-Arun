import { render, screen, fireEvent } from '@testing-library/react';
import ThemeInfo from '@/components/ThemeInfo';

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock document.documentElement.setAttribute
Object.defineProperty(document.documentElement, 'setAttribute', {
  value: jest.fn(),
  writable: true,
});


describe('ThemeInfo component', () => {
  const mockThemeProps = {
    icon: '/themes/test-theme.png', // Ensure this path is handled by next/image mock or actual file
    name: 'Test Theme',
    publisher: 'Test Publisher',
    theme: 'test-theme-data-attribute',
  };

  beforeEach(() => {
    localStorageMock.clear();
    (document.documentElement.setAttribute as jest.Mock).mockClear();
  });

  test('renders theme name and publisher correctly', () => { // Removed image check from this test title
    render(<ThemeInfo {...mockThemeProps} />);
    
    expect(screen.getByText(mockThemeProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockThemeProps.publisher)).toBeInTheDocument();
    // Image presence is implicitly tested by the component rendering without error
  });

  test('renders the "Set Color Theme" button', () => {
    render(<ThemeInfo {...mockThemeProps} />);
    expect(screen.getByRole('button', { name: /set color theme/i })).toBeInTheDocument();
  });

  test('clicking "Set Color Theme" button calls setTheme logic', () => {
    render(<ThemeInfo {...mockThemeProps} />);
    
    const button = screen.getByRole('button', { name: /set color theme/i });
    fireEvent.click(button);
    
    expect(localStorageMock.getItem('theme')).toBe(mockThemeProps.theme);
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', mockThemeProps.theme);
  });

  test('image is rendered and has correct decorative attributes', () => {
    const { container } = render(<ThemeInfo {...mockThemeProps} />);
    const imgTag = container.querySelector('img'); // Find the img tag directly

    expect(imgTag).toBeInTheDocument();
    expect(imgTag).toHaveAttribute('alt', '');
    expect(imgTag).toHaveAttribute('aria-hidden', 'true');
    expect(imgTag).toHaveAttribute('src'); // Check that src attribute exists
  });
});
