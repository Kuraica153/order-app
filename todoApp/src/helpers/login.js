import bcrypt from 'bcryptjs';

export const signUp = async (newUser) => {
    const { password } = newUser;
    const hashedPassword = await bcrypt.hash(password, '$2a$10$CwTycUXWue0Thq9StjUM0u');
    const user = { ...newUser, password: hashedPassword };
    const api = 'http://localhost:5000/api/users';
    const resp = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await resp.json();
    return data;

}

export const signIn = async ({ email, password }) => {

    const hashedPassword = await bcrypt.hash(password, '$2a$10$CwTycUXWue0Thq9StjUM0u');
    const user = { email, password: hashedPassword };
    const api = 'http://localhost:5000/api/users/login';
    const resp = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await resp.json();
    return data;
}
