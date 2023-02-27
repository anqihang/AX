export interface interf_Account {
  //Required<interf_Account>必须
  //Partial<interf_Account>可选
  //Pick<interf_Account,email | pwd>可选email | pwd
  // Record<K,T>
  // Exclude<T,U>从T中剔除可以给U的
  // Extract<T,U>从T中提取可以给U的
  // Omit<T,K>从T中剔除所有能给K的属性和pick相反
  // ReturnType
  email: string | boolean;
  pwd: string | boolean;
  code: string;
  rememberMe: boolean;
}
