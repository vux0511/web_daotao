export const transValidation = {
    data_empty: "Không nhận được dữ liều đầu vào. Vui lòng thử lại sau!",
   
    
};

export const transSuccess = {
    login_user: "Đăng nhập thành công", 
    register_user: (username) => {
        return `Tài khoản <b>${username}</b> đã được tạo thành công`; 
    },
   

}; 

export const transError = {
    login_user: "Đăng nhập thất bại.", 
    register_user: "Đăng ký thất bại. Vui lòng kiểm tra lại thông tin đăng ký",



}
