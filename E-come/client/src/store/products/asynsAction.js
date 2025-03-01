import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const getNewProducts = createAsyncThunk(
  "product/newProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apis.apiGetProducts({sort:'-createdAt'});

      // Kiểm tra nếu response không hợp lệ
      if (!response || !response.success) {
        return rejectWithValue(response?.message || "Lỗi không xác định");
      }

      return response.products; // Trả về danh sách categories nếu thành công
    } catch (error) {
      return rejectWithValue(error.message || "Lỗi khi gọi API");
    }
  }
);
