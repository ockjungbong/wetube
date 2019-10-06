 
export const join = (req, res)  => {
    res.render("Join", { pageTitle : "Join" });
};

export const login = (req, res) => {
    res.render("Login", { pageTitle : "Login" });
};

export const logout = (req, res) => {
    res.send("Logout", { pageTitle : "Logout" });
};

export const editProfile = (req, res) => {
    console.log("111111111111");
    res.render("editProfile", { pageTitle : "Edit Profile" });
};

export const userDetail = (req, res) => {
    console.log("22222222222");
    
    res.render("userDetail", { pageTitle : "User Detail" });
};



export const changePassword = (req, res) => {
    res.render("changePassword", { pageTitle : "Change Password" });
};