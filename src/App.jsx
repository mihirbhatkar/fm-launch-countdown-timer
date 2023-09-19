import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<img src="./images/bg-stars.svg" className="absolute z-0" alt="" />
			<div className="min-h-screen text-center mx-auto grid grid-rows-[1fr_2fr_1fr] relative items-center z-50 ">
				<h1 className="uppercase text-xl tracking-[0.3em] self-end">
					We're launching soon
				</h1>
				<div className="flex gap-4 text-5xl text-prim-soft-red place-self-center px-8">
					<div className="flex flex-col items-center gap-4">
						<div className=" rounded-xl bg-neu-dark-desaturated-blue h-24 w-24 sm:h-32 sm:w-32 grid place-content-center relative">
							<span className="mt-[2px]">08</span>
							<hr className="absolute border-black border-2  w-full top-[50%]" />
						</div>
						<span className="text-sm uppercase text-neu-dark-desaturated-blue">
							Days
						</span>
					</div>
					<div className="flex flex-col items-center gap-4">
						<div className="bg-neu-dark-desaturated-blue h-24 w-24 sm:h-32 sm:w-32 grid place-content-center ">
							08
						</div>
						<span className="text-sm uppercase text-neu-dark-desaturated-blue">
							Days
						</span>
					</div>
					<div className="flex flex-col items-center gap-4">
						<div className="bg-neu-dark-desaturated-blue h-24 w-24 sm:h-32 sm:w-32 grid place-content-center ">
							08
						</div>
						<span className="text-sm uppercase text-neu-dark-desaturated-blue">
							Days
						</span>
					</div>
					<div className="flex flex-col items-center gap-4">
						<div className="bg-neu-dark-desaturated-blue h-24 w-24 sm:h-32 sm:w-32 grid place-content-center ">
							08
						</div>
						<span className="text-sm uppercase text-neu-dark-desaturated-blue">
							Days
						</span>
					</div>
				</div>
				<div className="z-40 flex gap-4 items-center justify-center">
					<a href="">
						<img src="./images/icon-facebook.svg" alt="facebook" />
					</a>
					<a href="">
						<img
							src="./images/icon-pinterest.svg"
							alt="pinterest"
						/>
					</a>
					<a href="">
						<img
							src="./images/icon-instagram.svg"
							alt="instagram"
						/>
					</a>
				</div>
			</div>
			<img
				src="./images/pattern-hills.svg"
				className="absolute bottom-0 w-full"
				alt="hills"
			/>
		</>
	);
}

export default App;
