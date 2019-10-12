import routes from "../routes";

 
export const getJoin = (req, res)  => {
    res.render("Join", { pageTitle : "Join" });
};

 
export const postJoin = (req, res)  => {
    //console.log(req.body);

    // ES6 방식
    // req에서 body란 이름으로 4개 값을 가져온다.
    const {
        body : {name, email, password, password2 }
    } = req;

    if (password !== password2) {
        res.status(400);
        res.render("Join", { pageTitle : "Join" });
    } else {
        // To Do : Register User
        // To Do : Lou user In
        res.redirect(routes.home);
    }

};

export const getLogin = (req, res) => {
    res.render("Login", { pageTitle : "Login" });
};

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};


export const logout = (req, res) => {
    // To Do : Process Log Out
    res.redirect(routes.home);
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