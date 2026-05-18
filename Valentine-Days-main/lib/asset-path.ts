/** Base path for GitHub Pages (/codechoNhi) — works on every device after deploy. */
export function getBasePath(): string {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (typeof window === "undefined") {
    return fromEnv;
  }

  if (fromEnv) {
    return fromEnv;
  }

  const { hostname, pathname } = window.location;

  if (hostname.endsWith("github.io")) {
    const segment = pathname.split("/").filter(Boolean)[0];
    if (segment) {
      return `/${segment}`;
    }
  }

  return "";
}

export function assetPath(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
