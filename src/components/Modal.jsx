/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { motion } from "framer-motion"

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
}

const Modal = ({ handleClose, children }) => {
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={ handleClose }
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'fixed',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
				width: '100%',
				height: '100%',
				margin: '0!important',
				overflowY: 'scroll',
				WebkitOverflowScrolling: 'touch',
				zIndex: '1001',
				backdropFilter: 'blur(5px)',
				backgroundColor: 'rgba(18,18,44,.73)',
				transition: 'all .2s linear'
			}}
		>
			<motion.div
				onClick={ (e) => e.stopPropagation() }
				className="modal"
				variants={ dropIn }
				initial="hidden"
				animate="visible"
				exit="exit"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					background: '#F7FAFC',
					borderRadius: '16px',
					p: '24px',
					boxShadow: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
				}}
			>
				{ children }
			</motion.div>
		</motion.div>
	)
}

export default Modal
