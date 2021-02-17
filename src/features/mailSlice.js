import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedmail: null,
    sendMsgIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedmail = action.payload;
    },
    openSendMsg: (state) => {
      state.sendMsgIsOpen = true;
    },
    closeSendMsg: (state) => {
      state.sendMsgIsOpen = false;
    },
  },
});

export const { openSendMsg, closeSendMsg, selectMail } = mailSlice.actions;

export const selectSendMsgOpen = (state) => state.mail.sendMsgIsOpen;
export const selectOpenMail = (state) => state.mail.selectedmail;

export default mailSlice.reducer;
