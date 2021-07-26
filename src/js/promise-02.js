// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

// /Task 2

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {
  const promise = new Promise(resolve => {
    resolve(
      allUsers.map(user => (user.name === username ? { ...user, active: !user.active } : user)),
    );
  });

  return promise;
};

toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);