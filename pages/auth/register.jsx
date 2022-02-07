/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import TextInput from "../../src/components/textInput"
import Loader from "../../src/images/Ellipse 1.png"
import {useState} from "react"
import Loading from "../../src/components/Loading"
import Modal from "../../src/components/Modal";

export default ({ showNotification }) => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitting2, setIsSubmitting2] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [fullname, setFullname] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [secretCode, setSecretCode] = useState('')

	const formSubmitHandler = (event) => {
		event.preventDefault()
		setIsSubmitting(true)
		
		setTimeout(() => setShowModal(true), 500)
	}
	
	const secretCodeBtnClickHandler = (event) => {
		setIsSubmitting2(true)
		setTimeout(() => {
			setShowModal(false)
			setIsSubmitting(false)
			setIsSubmitting2(false)
			showNotification('success', 'Bravo, votre numéro de téléphone est vérifié')
		}, 500)
	}
	
	const modalCloseHandler = () => {
		setShowModal(false)
		setIsSubmitting(false)
	}
	
	return (
		<div sx={{display: 'flex', alignItems: 'stretch', height: '100vh'}}>
			<section sx={{flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bg: '#F7FAFC'}}>
				<div sx={{width: '30%'}}>
					<div sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
						<span sx={{
							fontWeight: '600',
							fontSize: '28px',
							lineHeight: '136.02%',
							color: '#27272E'
						}}>Create your account</span>
						<span sx={{
							fontSize: '16px',
							lineHeight: '162.02%',
							fontFeatureSettings: '\'salt\' on',
							color: '#27272E'
						}}>It’s free and easy</span>
					</div>
					{
						showModal ? (
							<Modal handleClose={ modalCloseHandler }>
								<div sx={{width: '350px'}}>
									<h5 sx={{variant: 'headings.h5'}}>Vérifiez votre numéro de téléphone</h5>
									<TextInput name="secret_code" value={ secretCode } setValue={ setSecretCode } label="Code secret" type="text"/>
									<div sx={{display: 'flex', justifyContent: 'center'}}>
										<button sx={{ variant: 'buttons.primary', mt: '10px' }} onClick={ secretCodeBtnClickHandler }>
											{ isSubmitting2 ? (<Loading width={12} height={12} src={Loader}/>) : 'Vérifiez' }
										</button>
									</div>
								</div>
							</Modal>
						) : ''
					}
					<form onSubmit={ formSubmitHandler } sx={{margin: '54px 0 0 0'}} autoComplete="off">
						<TextInput name="name" value={ fullname } setValue={ setFullname } label="Your name" type="text"/>
						<TextInput name="phone" value={ phone } setValue={ setPhone } label="Phone number" type="text"/>
						<TextInput name="Password" value={ password } setValue={ setPassword } label="Password" type="Password" help={{text: "Must be 8 characters at least", color: '#718096'}} autoComplete="new-password"/>
						
						<button disabled={ isSubmitting } sx={{
							variant: 'buttons.primary',
							display: 'block',
							padding: '16px 0',
							margin: '30px 0',
							width: '100%',
							borderRadius: '8px',
							fontSize: '14px',
							lineHeight: '14px'
						}}>
							{ isSubmitting ? (<Loading width={14} height={14} src={Loader}/>) : 'Register' }
						</button>
					</form>
					
					<div sx={{display: 'flex', alignItems: 'center', margin: '0 0 30px 0'}}>
						<span sx={{flexGrow: 1, border: '1px solid #EDF2F7'}}/>
						<span sx={{
							fontSize: '10px',
							lineHeight: '12px',
							alignItems: 'center',
							textAlign: 'center',
							color: '#718096',
							margin: '0 24px',
						}}>or do it via other accounts</span>
						<span sx={{flexGrow: 1, border: '1px solid #EDF2F7'}}/>
					</div>
					
					<div sx={{display: 'flex', justifyContent: 'center', alignItems: 'stretch'}}>
					<span sx={{
						padding: '0 25px 0 25px',
						display: 'flex',
						alignItems: 'center',
						background: '#FFFFFF',
						boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)',
						borderRadius: '8px',
						cursor: 'pointer',
						justifyContent: 'center',
						margin: '0 20px 0 0'
					}}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_4946_23949)">
								<path d="M5.54676 14.8044L4.73983 17.8167L1.79054 17.8791C0.909128 16.2443 0.40918 14.3739 0.40918 12.3862C0.40918 10.4642 0.876619 8.65163 1.70519 7.05566H1.70582L4.33152 7.53705L5.48174 10.147C5.241 10.8488 5.10979 11.6022 5.10979 12.3862C5.10988 13.2371 5.264 14.0523 5.54676 14.8044Z" fill="#FBBB00"/>
								<path d="M23.3884 10.2207C23.5216 10.9219 23.591 11.646 23.591 12.386C23.591 13.2159 23.5037 14.0253 23.3375 14.8061C22.7733 17.4631 21.2989 19.7832 19.2565 21.425L19.2559 21.4244L15.9487 21.2557L15.4806 18.3337C16.8358 17.5389 17.8949 16.2951 18.4528 14.8061H12.2549V10.2207H18.5433H23.3884Z" fill="#518EF8"/>
								<path d="M19.2559 21.4239L19.2565 21.4245C17.2701 23.0211 14.7469 23.9764 12.0001 23.9764C7.58598 23.9764 3.74826 21.5092 1.79053 17.8785L5.54675 14.8037C6.5256 17.4161 9.04567 19.2758 12.0001 19.2758C13.27 19.2758 14.4597 18.9325 15.4805 18.3332L19.2559 21.4239Z" fill="#28B446"/>
								<path d="M19.3984 3.46337L15.6435 6.53749C14.5869 5.87708 13.338 5.49558 12 5.49558C8.97869 5.49558 6.41148 7.44054 5.48168 10.1466L1.70571 7.05528H1.70508C3.63415 3.336 7.52027 0.794922 12 0.794922C14.8124 0.794922 17.391 1.79672 19.3984 3.46337Z" fill="#F14336"/>
							</g>
							<defs>
								<clipPath id="clip0_4946_23949">
									<rect width="23.1818" height="23.1818" fill="white" transform="translate(0.40918 0.794922)"/>
								</clipPath>
							</defs>
						</svg>
					</span>
						<span sx={{
							padding: '0 25px 0 25px',
							display: 'flex',
							alignItems: 'center',
							background: '#FFFFFF',
							boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)',
							borderRadius: '8px',
							cursor: 'pointer',
							justifyContent: 'center',
							margin: '0 20px 0 0'
						}}>
						<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.0352 18.4834C19.6848 19.2943 19.27 20.0407 18.7894 20.7269C18.1343 21.6624 17.5979 22.3099 17.1845 22.6695C16.5437 23.2598 15.8572 23.562 15.122 23.5792C14.5942 23.5792 13.9577 23.4288 13.2168 23.1236C12.4734 22.8199 11.7903 22.6695 11.1656 22.6695C10.5105 22.6695 9.80795 22.8199 9.05645 23.1236C8.3038 23.4288 7.69748 23.5878 7.2339 23.6036C6.52888 23.6337 5.82615 23.3228 5.12471 22.6695C4.67701 22.2784 4.11703 21.6079 3.4462 20.6581C2.72645 19.6438 2.13471 18.4676 1.67114 17.1267C1.17466 15.6783 0.925781 14.2758 0.925781 12.918C0.925781 11.3626 1.26134 10.0211 1.93346 8.89691C2.46169 7.99394 3.16442 7.28164 4.04394 6.75873C4.92346 6.23583 5.87378 5.96936 6.8972 5.95232C7.45718 5.95232 8.19152 6.12581 9.10408 6.46677C10.0141 6.80888 10.5984 6.98237 10.8545 6.98237C11.0461 6.98237 11.6952 6.77951 12.7955 6.37508C13.8361 6.00002 14.7143 5.84473 15.4338 5.9059C17.3834 6.06349 18.848 6.83323 19.8221 8.22C18.0785 9.27813 17.216 10.7602 17.2332 12.6614C17.2489 14.1423 17.7853 15.3746 18.8395 16.3531C19.3172 16.8072 19.8507 17.1582 20.4443 17.4075C20.3156 17.7814 20.1797 18.1396 20.0352 18.4834ZM15.564 0.860798C15.564 2.02152 15.1406 3.10528 14.2967 4.10839C13.2783 5.3009 12.0464 5.98999 10.7106 5.88126C10.6936 5.74201 10.6838 5.59545 10.6838 5.44144C10.6838 4.32716 11.1681 3.13465 12.0281 2.15961C12.4575 1.66593 13.0036 1.25544 13.6659 0.927987C14.3267 0.605419 14.9518 0.427032 15.5396 0.396484C15.5568 0.551654 15.564 0.706834 15.564 0.860783V0.860798Z" fill="black"/>
						</svg>
					</span>
						<span sx={{
							padding: '5px 25px 5px 25px',
							display: 'flex',
							alignItems: 'center',
							background: '#FFFFFF',
							boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)',
							borderRadius: '8px',
							cursor: 'pointer',
							justifyContent: 'center',
							margin: '0 20px 0 0',
							fontWeight: 'bold',
							fontSize: '40px',
							lineHeight: '48px',
							color: '#3B5999'
						}}>
						f
					</span>
					</div>
					
					<div sx={{
						fontWeight: '600',
						fontSize: '14px',
						lineHeight: '24px',
						textAlign: 'right',
						color: '#718096',
						position: 'absolute',
						left: 'calc(100% - 250px)',
						bottom: '0',
						top: 'calc(100% - 30px)'
					}}>
						<span>Already have an account? </span>
						<Link href="/auth/login">
							<span sx={{color: '#4C6FFF', cursor: 'pointer'}}>Login</span>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
