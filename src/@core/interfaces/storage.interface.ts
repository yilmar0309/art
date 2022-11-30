export interface SetBaseParams {
  item: string;
  key: string;
}

export interface SetObjectParams<T> extends Omit<SetBaseParams, 'item'> {
  object: T;
}

export interface Preferences {
  showEditUser: boolean;
}
