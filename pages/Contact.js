import React from 'react'
import styles from "@/styles/Contact.module.css";
import { useForm } from 'react-hook-form';

const Contact = () => {
  let defaultval = {
    name: "",
    email: "",
    phone: "",
    desc: ""
  }
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange", defaultval });
  const onSubmit = (data) => {
    console.log(data);
    window.alert("form submitted successful")
    reset()

  };
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactHeading}>contact</h2>
      <h3 className={styles.contactHeading}>Feel free to reach out to me for any questions or opportunities!</h3>
      <div className={styles.contactcontainer}>
        <div className={styles.formcontainer}>
          <form onSubmit={handleSubmit(onSubmit)}  >

            <div className={styles.inputcontainer}>
              <label htmlFor='name'>Name</label>
              <input className={styles.conntactInput}
                id="name"
                {...register("name", { required: true, maxLength: 100 })}

              />
              {errors.name && <p className={styles.ContactErrorr}>Name is required and should not exceed 100 characters.</p>}
            </div>
            <div className={styles.inputcontainer}>
              <label htmlFor='email'>Email</label>
              <input className={styles.conntactInput} id='email'
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email is not valid",
                  },
                })}


              />
              {errors.email && <p className={styles.ContactErrorr}>{errors.email.message}</p>}
            </div>
            <div className={styles.inputcontainer}>
              <label>Phone</label>
              <input className={styles.conntactInput}
                id='phone'
                {...register("phone", {
                  required: true,
                  maxLength: {
                    value: 20,
                    message: "Phone number cannot exceed 20 characters",
                  },
                  pattern: {
                    value: /^[0-9]+$/, // Regular expression for numbers only
                    message: "Phone number must contain only digits",
                  }
                })}


              />
              {errors.phone && <p className={styles.ContactErrorr}>Please provide valid phone number .</p>}

            </div>
            <div className={styles.inputcontainer}>
              <textarea className={styles.contactTextArea}

                placeholder="Leave a comment here" id="desc" />

            </div>
            <div className={styles.contactBtncontainer}>
              <button className={styles.contactBtn} type='text'>submit</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact