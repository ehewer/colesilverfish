// NOT CURRENTLY IN USE
// for accessing pages using a hardcoded password

const crypto = require('crypto');

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("ColeSilverfish")
        ? JSON.parse(window.localStorage.getItem("ColeSilverfish"))
        : {}

const setUser = user =>
  window.localStorage.setItem("ColeSilverfish", JSON.stringify(user))

export const handleLogin = (password) => {
    // calculate and compare hashed passwords
    const hash = crypto.createHash('sha256');
    hash.update(password + "salt"); // hardcoded salt
    var digested = hash.digest('hex');

    console.log("digested: " + digested);

    if (digested === "ebe6c682dfaf84e97ed6f36a19b4f4d7322bc9f8a3ab0740028a3f876f800f63") {
        return setUser({
            valid: true,
            timestamp: Date.now(),
        })
    }
    return false
}

export const isLoggedIn = () => {
    const user = getUser();
    return user.valid;
}

export const logout = callback => {
    setUser({})
    callback()
}