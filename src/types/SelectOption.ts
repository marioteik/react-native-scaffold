interface SelectOption<T = string, K = string> {
  label: T;
  value: K;
}

type SelectOptions<T = string> = SelectOption<T>[];

export type { SelectOption, SelectOptions };
