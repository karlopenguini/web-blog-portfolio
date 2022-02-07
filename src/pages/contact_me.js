import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { init } from "@emailjs/browser"
import emailjs from "@emailjs/browser"
import ReCaptcha from "react-google-recaptcha"

let contacts = {
	"E-mail": "karlobpalisoc@gmail.com",
	Linkedin: "https://www.linkedin.com/in/kmfpalisoc/",
}
init(`${process.env.GATSBY_EMAILJS_ACCESS_TOKEN}`)

let Contact = () => {
	const form = useRef()

	const [isValid, setIsValid] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				`${process.env.GATSBY_EMAILJS_SERVICE_ID}`,
				`${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`,
				form.current,
				`${process.env.GATSBY_EMAILJS_USER_ID}`
			)
			.then(
				(result) => {
					setIsValid((isValid) => true)
				},
				(error) => {
					setIsValid((isValid) => false)
				}
			)
	}

	return (
		<div className='text-sm w-full'>
			<span className='font-medium'>
				Need web presence for your business or maybe a web portfolio?
				Feel free to leave a message in my inbox.
			</span>
			<br />
			<br />
			<br />

			<form
				ref={form}
				onSubmit={sendEmail}
				className='flex flex-col space-y-9 w-full pb-14'>
				<div className='w-full flex flex-col'>
					<label className='pb-2'>
						Name:<span className='text-red-600'>*</span>
					</label>
					<motion.input
						whileFocus={{ borderColor: "#000000", padding: "8px" }}
						required
						type='text'
						name='name'
						className='focus:outline-none font-light border-b-[1px] border-zinc-400 min-w-full'
					/>
				</div>

				<div className='w-full flex flex-col'>
					<label className='pb-2'>
						Email:<span className='text-red-600'>*</span>
					</label>
					<motion.input
						whileFocus={{ borderColor: "#000000", padding: "8px" }}
						required
						type='email'
						name='email'
						className='focus:outline-none font-light border-b-[1px] border-zinc-400 min-w-full'
					/>
				</div>

				<div className='flex flex-col flex-start'>
					<label className='pb-4'>
						Message:<span className='text-red-600'>*</span>
					</label>
					<motion.textarea
						whileFocus={{ borderColor: "#000000" }}
						required
						name='message'
						className='focus:outline-none p-4 text-base rounded-lg font-light border-[1px] border-zinc-400 min-w-full min-h-[9rem]'
					/>
				</div>
				<ReCaptcha
					sitekey={`${process.env.GATSBY_CAPTCHA_SITE_KEY}`}
					onChange={sendEmail}
				/>

				<motion.input
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.1 },
						fontWeight: 500,
						background: "black",
						color: "white",
					}}
					whileTap={{ scale: 0.95 }}
					type='submit'
					value='Send'
					className='w-24 font-light text-base py-2 border-zinc-800 border-[1px] cursor-pointer'
				/>
			</form>

			{Object.entries(contacts).map(([service, id]) => (
				<div className='pb-2'>
					{service}: <u>{id}</u>
				</div>
			))}
		</div>
	)
}

export default Contact
