import React, { useState } from "react";
import ContactItem from "../components/Contact/ContactItem";
import Title from "../components/Title/Title";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import emailjs from "emailjs-com";
import CircularProgress from "@mui/material/CircularProgress";
import Head from 'next/head'
import MuiAlert, { AlertProps,AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Contact() {
  const [level, setlevel] = useState<AlertColor>("info")
  const [msg, setmsg] = useState<string>("")
  const [openSnack, setopenSnack] = useState(false)
  const [name, setname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const clear = () => {
    setname("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    var templateParams = {
      name: e.currentTarget.myname.value,
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };
    if (name.trim().length===0 || email.trim().length===0 || subject.trim().length===0  ) {
      setlevel("warning")
      setmsg("Invalid Data")
      setopenSnack(true)
    setLoading(false);
    return
    }
    console.log(templateParams);
    const sent = await emailjs
      .send(
        "service_26cnqjg",
        "template_og2byuu",
        templateParams,
        "user_BtmzeoCsFL065ke7xMmAm"
      )
      .then(
        (resp) => {
          return resp;
        },
        (error) => {
          return error;
        }
      );
    console.log(sent.status);
    if (sent.status == 200) {
      
      setlevel("success")
      setmsg("Sent SuccessFully")
      setopenSnack(true)
      await emailjs
        .send(
          "service_26cnqjg",
          "template_vl118tp",
          templateParams,
          "user_BtmzeoCsFL065ke7xMmAm"
        )
        .then((resp) => {
          return resp;
        });
    }
    else{
      setlevel("error")
      setmsg("Something Went Wrong")
      setopenSnack(true)
    }
    clear();
    setLoading(false);
  };
  return (
    <div>
       <Head>
        <title>Contact Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Title title="Contact" />
      <div className="contact-section my-9  grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className=" left-contact-content ">
          <form className="myForm relative " onSubmit={handleSubmit}>
            <div className="form-field relative w-full">
              <label
                className="absolute left-6 -top-5 p-2 inline-block  dark:bg-dark-background_dark_color bg-light-background_light"
                htmlFor="myname"
              >
                {" "}
                Enter Your Name*
              </label>
              <input
                required
                disabled={loading}
                onChange={(val) => setname(val.currentTarget.value)}
                value={name}
                className=" w-full border-2 border-solid  outline-none border-light-border_2 dark:border-dark-border_color bg-transparent h-14 px-4"
                id="myname"
                type="text"
              ></input>
            </div>

            <div className="form-field  mt-8 relative w-full">
              <label
                className="absolute left-6 -top-5 p-2 inline-block  dark:bg-dark-background_dark_color bg-light-background_light"
                htmlFor="email"
              >
                {" "}
                Enter Your Email*
              </label>
              <input
                required
                disabled={loading}
                onChange={(val) => setEmail(val.currentTarget.value)}
                value={email}
                className=" w-full border-2 border-solid  outline-none border-light-border_2 dark:border-dark-border_color bg-transparent h-14 px-4"
                id="email"
                type="email"
              ></input>
            </div>
            <div className="form-field  mt-8 relative w-full">
              <label
                className="absolute left-6 -top-5 p-2 inline-block  dark:bg-dark-background_dark_color bg-light-background_light"
                htmlFor="subject"
              >
                {" "}
                Enter Your Subject*
              </label>
              <input
                required
                disabled={loading}
                onChange={(val) => setSubject(val.currentTarget.value)}
                value={subject}
                className=" w-full border-2 border-solid  outline-none border-light-border_2 dark:border-dark-border_color bg-transparent h-14 px-4"
                id="subject"
                type="text"
              ></input>
            </div>

            <div className="form-field mt-8 relative w-full">
              <label
                className="absolute left-6 -top-5 p-2 inline-block  dark:bg-dark-background_dark_color bg-light-background_light"
                htmlFor="message"
              >
                Enter Your Message
              </label>
              <textarea
                onChange={(val) => setMessage(val.currentTarget.value)}
                value={message}
                disabled={loading}
                className="w-full border-2 border-solid border-outline-none border-light-border_2  outline-none dark:border-dark-border_color bg-transparent pt-4 px-4"
                id="textarea"
                name="message"
                rows={10}
                cols={30}
              ></textarea>
            </div>

            <div
              className="form-field mt-8 relative"
              style={{ width: "fit-content" }}
            >
              {loading && (
                <div className="progress-bar">
                  <CircularProgress
                    size={30}
                    thickness={5}
                    className="text-dark-primary_color_light"
                    color="secondary"
                  />
                </div>
              )}
              <button
                disabled={loading}
                className={`${
                  loading
                    ? "dark:bg-dark-background_light_color_2 bg-indigo-300 text-dark-secondary_color "
                    : "dark:bg-dark-primary_color_light bg-indigo-500 "
                }
                             p-4`}
                type="submit"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
        <div className="right-content">
          <ContactItem
            title="Phone No"
            icon={<AiFillPhone />}
            contact="+91-9928750358"
            type="tel"
          />
          <ContactItem
            title="Email"
            icon={<AiTwotoneMail />}
            contact="ankitjain0029@gmail.com"
            type="mailto"
          />
          <ContactItem
            title="Address"
            icon={<ImLocation2 />}
            contact="Gurgram, Haryana India "
            type=" "
          />
        </div>
      </div>
      <Snackbar
  open={openSnack}
  autoHideDuration={5000}
  onClose={()=>setopenSnack(false)}
  message="SENT">
    <Alert onClose={()=>setopenSnack(false)} severity={level} sx={{ width: '100%' }}>
          {msg}
        </Alert>
    </Snackbar>
    </div>
  );
}

export default Contact;
