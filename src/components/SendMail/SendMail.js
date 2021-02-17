import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { closeSendMsg } from "../../features/mailSlice";
import { db } from "../../firebase";
import firebase from "firebase";

const SendMail = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMsg());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMsg())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        <p>{errors.to && <p className="sendMail__error">To is required!</p>}</p>

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        <p>
          {errors.subject && (
            <p className="sendMail__error">Subject is required!</p>
          )}
        </p>

        <input
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          type="text"
          ref={register({ required: true })}
        />
        <p>
          {errors.message && (
            <p className="sendMail__error">Message is required!</p>
          )}
        </p>

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
