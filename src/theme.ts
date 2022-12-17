export enum ThemeColors {
  slate = "slate",
  gray = "gray",
  red = "red",
  orange = "orange",
  amber = "amber",
  yellow = "yellow",
  lime = "lime",
  green = "green",
  emerald = "emerald",
  teal = "teal",
  cyan = "cyan",
  sky = "sky",
  blue = "blue",
  indigo = "indigo",
  violet = "violet",
  purple = "purple",
  fuchsia = "fuchsia",
  pink = "pink",
  rose = "rose",
}

export type ThemeConfig = {
  color: keyof typeof ThemeColors;
};

export const defaultConfig: ThemeConfig = {
  color: ThemeColors.blue,
};

export class Theme {
  static config: ThemeConfig = {} as ThemeConfig;

  static setConfig = (newConfig: typeof defaultConfig) => {
    Theme.config = {
      ...Theme.config,
      ...newConfig,
    };
  };
}

Theme.setConfig(defaultConfig);
