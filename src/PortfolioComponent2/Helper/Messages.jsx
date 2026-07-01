// import emailjs from "emailjs-com";
// import { Form, Input, Button, notification } from "antd";
// import { MessageOutlined, SendOutlined } from "@ant-design/icons";

// export default function Messages() {
//   const [api, contextHolder] = notification.useNotification();
//   const [form] = Form.useForm();

//   const handleSendEmail = (values) => {
//     if (!values.email || !values.messages) {
//       notification.error({
//         message: "Opps",
//         description: "Please fill the input fields",
//       });
//       return;
//     }

//     const emailParams = {
//       to_name: "Md Faizan",
//       from_name: values.email,
//       message: values.messages,
//       from_email: values.email,
//     };

//     emailjs
//       .send(
//         "faizanservice11",
//         "template_t8n37l5",
//         { ...emailParams },
//         "nofDJb3u1FkZQ7btt",
//       )
//       .then((response) => {
//         notification.success({
//           message: "Email Sent",
//           description: "Your message has been sent successfully!",
//         });
//         form.resetFields();
//       })
//       .catch((error) => {
//         notification.error({
//           message: "Error Sending Email",
//           description:
//             "There was an error sending your message. Please try again.",
//         });
//       });
//   };

//   const openNotification = () => {
//     // console.log("click");
//     api.open({
//       message: "",
//       description: (
//         <Form form={form} layout="vertical" onFinish={handleSendEmail}>
//           <Form.Item label="Message" name="messages">
//             <Input.TextArea placeholder="Enter your message" rows={3} />
//           </Form.Item>

//           <Form.Item label="Your Email" name="email">
//             <Input placeholder="Enter your email" />
//           </Form.Item>

//           <Button
//             type="primary"
//             htmlType="submit"
//             icon={<SendOutlined />}
//             style={{ width: "100%", borderRadius: 5, marginTop: 8 }}
//           >
//             Send Message
//           </Button>
//         </Form>
//       ),
//       duration: 15,
//       placement: "topRight",
//       // showProgress: true,
//       // pauseOnHover: true,
//     });
//   };

//   return (
//     <div>
//       {contextHolder}

//       <MessageBttonStyled>
//         <MessageOutlined />
//       </MessageBttonStyled>
//     </div>
//   );
// }
// const MessageBttonStyled = styled.button({
//   borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45% ",
//   width: "40px",
//   height: "40px",
//   backgroundColor: "black",
//   color: "white",
//   fontSize: "1.4rem",
// });

import styled from "@emotion/styled";
import {
  MessageOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function Message() {
  return (
    <Wrapper>
      <div className="options">
        <a href="tel:+916201855200" className="item call">
          <PhoneOutlined />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/916201855200"
          target="_blank"
          rel="noopener noreferrer"
          className="item whatsapp"
        >
          <WhatsAppOutlined />
          <span>WhatsApp</span>
        </a>
      </div>

      <MessageButton>
        <MessageOutlined />
      </MessageButton>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  "&:hover .options": {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0)",
  },

  ".options": {
    position: "absolute",
    top: "70px", // Opens below the button since it's at the top-left
    left: 0,

    display: "flex",
    flexDirection: "column",
    gap: "10px",

    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-10px)",
    transition: "all .3s ease",
  },

  ".item": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 14px",
    borderRadius: "30px",
    color: "#fff",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontWeight: 600,
    transition: "0.3s",

    "&:hover": {
      transform: "translateX(5px)",
    },
  },

  ".call": {
    background: "#2563eb",
  },

  ".whatsapp": {
    background: "#25D366",
  },
});

const MessageButton = styled.button({
  width: "40px",
  height: "40px",
  border: "none",
  cursor: "pointer",
  borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45%",
  background: "#111827",
  color: "#fff",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,.2)",

  "&:hover": {
    transform: "scale(1.08)",
  },
});
