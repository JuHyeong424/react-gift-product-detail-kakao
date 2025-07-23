export const saveUserInfo = (data: { email: string; name: string; authToken: string }) => {
  localStorage.setItem('userInfo', JSON.stringify(data));
};

export const getUserInfo = () => {
  const stored = localStorage.getItem('userInfo');
  if (!stored) return null;

  const parsed = JSON.parse(stored);
  return parsed.data ? parsed.data : parsed;
};

export const clearUserInfo = () => {
  localStorage.removeItem('userInfo');
};
