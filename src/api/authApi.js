import axiosInstance from "./configs";

// 🔹 Register user
export const registerUser = async (data) => {
  try {
    const payload = { ...data, password_confirmation: data.confirmPassword };
    const response = await axiosInstance.post("/register", payload);

    // حفظ token و user بعد التسجيل

    return response.data;
  } catch (error) {
    // 🔹 Validation Errors 422
    if (error.response?.status === 422) {
      throw error.response.data.message; // object فيه الحقول
    }

    // 🔹 أي خطأ عام من السيرفر
    if (error.response?.data) {
      // لو message موجود كـ string
      if (typeof error.response.data.message === "string") {
        throw error.response.data.message;
      }
      // لو message object (مش Validation) نخليه نص عام
      return Promise.reject("An unexpected error occurred");
    }

    // 🔹 أي خطأ غير متوقع (network, timeout ...)
    return Promise.reject("An unexpected error occurred");
  }
};

// 🔹 Login user
export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data);

    // حفظ token و user بعد تسجيل الدخول
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get("/user");
    console.log("Fetched user data:", response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch user data" };
  }
};


// 🔹 Logout user
export const logoutUser = async () => {
  try {
    await axiosInstance.post("/logout");

    // إزالة token و user
    localStorage.removeItem("authToken");


    return { message: "Logged out successfully" };
  } catch (error) {
    throw error.response?.data || { message: "Logout failed" };
  }
};

// 🔹 Example: protected API request
export const getProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Request failed" };
    }
    
};

export const checkAuth = async () => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  if (!token) return false;

  try {
    const response = await axiosInstance.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user || response.data; // ترجع بيانات المستخدم
  } catch (error) {
    console.error("Invalid token or expired:", error);
    // إزالة التوكن لو منتهي الصلاحية
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    return false;
  }
};

