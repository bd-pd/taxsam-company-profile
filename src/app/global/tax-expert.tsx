import React from "react";
import "./../css/global/tax-expert.css";
import { IoIosArrowForward } from "react-icons/io";

const experts = [
	{
		name: "TORANG SHAKESPEARE SIAGIAN, A.Md.,S.E., BKP.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak torang.png",
	},
	{
		name: "HARIS BUDI SETIAWAN, SST, BKP",
		role: "Tax Expert",
		img: "/assets/images/tax/pak haris.png",
	},
	{
		name: "MAULADY MUNANDAR, S.E., M.M.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak maulady.png",
	},
	{
		name: "YOSEP POERNOMO, S. Ak",
		role: "Tax Expert",
		img: "/assets/images/tax/pak yosep.png",
	},
	{
		name: "ELIZABETH NATHANIA, S. Ak.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu Elizabeth.png",
	},
	{
		name: "WILYANDRI, S.E., M.Sc., M.B.A., M.I.M.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak willy.png",
	},
	{
		name: "ARDIAN MAHARDI PUTERA, S. Akun",
		role: "Tax Expert",
		img: "/assets/images/tax/pak Ardian.png",
	},
	{
		name: "SATRIA WIBAWA, Ak., M.Ak., CERA., C.T.L.C",
		role: "Tax Expert",
		img: "/assets/images/tax/pak Satria.png",
	},
	{
		name: "RIFQI MUHAMMAD, S.E., M.Si.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak rifqi.png",
	},
	{
		name: "DIANA SARI, S.Ak., M.Tax.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu diana.png",
	},
	{
		name: "BUDI HARTANTO, S.E., M.Tax., BKP.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak budi.png",
	},
	{
		name: "SITI NURHALIZA, S.E., M.M., CPA.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu siti.png",
	},
	{
		name: "AHMAD FAUZI, S.Ak., M.Tax., CA.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak ahmad.png",
	},
];

// New experts for second carousel
const expertsSecond = [
	{
		name: "ANDI PRATAMA, S.E., M.Tax., BKP.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak andi.png",
	},
	{
		name: "SARI DEWI, S.Ak., M.M., CPA.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu sari.png",
	},
	{
		name: "BAMBANG SUSILO, S.E., M.Si., BKP.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak bambang.png",
	},
	{
		name: "MAYA SINTA, S.Ak., M.Tax.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu maya.png",
	},
	{
		name: "HERMAN WIJAYA, S.E., M.B.A., CA.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak herman.png",
	},
	{
		name: "RINA KUSUMA, S.Ak., M.M., BKP.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu rina.png",
	},
	{
		name: "DAVID GUNAWAN, S.E., M.Tax., CPA.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak david.png",
	},
	{
		name: "LISA HANDAYANI, S.Ak., M.Si.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu lisa.png",
	},
	{
		name: "RYAN KURNIAWAN, S.E., M.Tax., BKP.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak ryan.png",
	},
	{
		name: "NITA SAFITRI, S.Ak., M.M., CA.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu nita.png",
	},
	{
		name: "AGUS SANTOSO, S.E., M.B.A., BKP.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak agus.png",
	},
	{
		name: "WULAN SARI, S.Ak., M.Tax., CPA.",
		role: "Tax Expert",
		img: "/assets/images/tax/bu wulan.png",
	},
	{
		name: "FERRY HIDAYAT, S.E., M.Si., CA.",
		role: "Tax Expert",
		img: "/assets/images/tax/pak ferry.png",
	},
];

export default function TaxExpertSection() {
	// First carousel state
	const [page, setPage] = React.useState(0);
	const [hasUserInteracted, setHasUserInteracted] = React.useState(false);
	
	// Second carousel state
	const [pageSecond, setPageSecond] = React.useState(0);
	const [hasUserInteractedSecond, setHasUserInteractedSecond] = React.useState(false);
	
	const perPage = 4;
	const totalPages = Math.ceil(experts.length / perPage);
	const totalPagesSecond = Math.ceil(expertsSecond.length / perPage);
	
	const autoScrollInterval = React.useRef<NodeJS.Timeout | null>(null);
	const autoScrollIntervalSecond = React.useRef<NodeJS.Timeout | null>(null);

	// Auto scroll functions for first carousel
	const startAutoScroll = React.useCallback(() => {
		if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
		autoScrollInterval.current = setInterval(() => {
			setPage((prevPage) => {
				const nextPage = prevPage + 1;
				return nextPage >= totalPages ? 0 : nextPage;
			});
		}, 4000);
	}, [totalPages]);

	const stopAutoScroll = React.useCallback(() => {
		if (autoScrollInterval.current) {
			clearInterval(autoScrollInterval.current);
			autoScrollInterval.current = null;
		}
	}, []);

	// Auto scroll functions for second carousel
	const startAutoScrollSecond = React.useCallback(() => {
		if (autoScrollIntervalSecond.current) clearInterval(autoScrollIntervalSecond.current);
		autoScrollIntervalSecond.current = setInterval(() => {
			setPageSecond((prevPage) => {
				const nextPage = prevPage + 1;
				return nextPage >= totalPagesSecond ? 0 : nextPage;
			});
		}, 4500); // Slightly different timing
	}, [totalPagesSecond]);

	const stopAutoScrollSecond = React.useCallback(() => {
		if (autoScrollIntervalSecond.current) {
			clearInterval(autoScrollIntervalSecond.current);
			autoScrollIntervalSecond.current = null;
		}
	}, []);

	// First carousel handlers
	const handlePrev = () => {
		setHasUserInteracted(true);
		stopAutoScroll();
		setPage((p) => Math.max(0, p - 1));
	};

	const handleNext = () => {
		setHasUserInteracted(true);
		stopAutoScroll();
		setPage((p) => Math.min(totalPages - 1, p + 1));
	};

	const handleDotClick = (index: number) => {
		setHasUserInteracted(true);
		stopAutoScroll();
		setPage(index);
	};

	// Second carousel handlers
	const handlePrevSecond = () => {
		setHasUserInteractedSecond(true);
		stopAutoScrollSecond();
		setPageSecond((p) => Math.max(0, p - 1));
	};

	const handleNextSecond = () => {
		setHasUserInteractedSecond(true);
		stopAutoScrollSecond();
		setPageSecond((p) => Math.min(totalPagesSecond - 1, p + 1));
	};

	const handleDotClickSecond = (index: number) => {
		setHasUserInteractedSecond(true);
		stopAutoScrollSecond();
		setPageSecond(index);
	};

	// Auto scroll effects
	React.useEffect(() => {
		if (!hasUserInteracted) {
			startAutoScroll();
		}
		return () => stopAutoScroll();
	}, [hasUserInteracted, startAutoScroll, stopAutoScroll]);

	React.useEffect(() => {
		if (!hasUserInteractedSecond) {
			startAutoScrollSecond();
		}
		return () => stopAutoScrollSecond();
	}, [hasUserInteractedSecond, startAutoScrollSecond, stopAutoScrollSecond]);

	// Mouse handlers for first carousel
	const handleMouseEnter = () => {
		if (!hasUserInteracted) stopAutoScroll();
	};

	const handleMouseLeave = () => {
		if (!hasUserInteracted) startAutoScroll();
	};

	// Mouse handlers for second carousel
	const handleMouseEnterSecond = () => {
		if (!hasUserInteractedSecond) stopAutoScrollSecond();
	};

	const handleMouseLeaveSecond = () => {
		if (!hasUserInteractedSecond) startAutoScrollSecond();
	};

	const visibleExperts = experts.slice(page * perPage, page * perPage + perPage);
	const visibleExpertsSecond = expertsSecond.slice(pageSecond * perPage, pageSecond * perPage + perPage);

	return (
		<section className="tax-expert-section">
			<div className="tax-expert-header-row">
				<div>
					<h2 className="tax-expert-title">Meet Your Expert</h2>
				</div>
				<div className="tax-expert-desc">
					Meet the experts ready to guide you through every step of your tax
					journey.
				</div>
			</div>

			{/* First Carousel */}
			<div
				className="tax-expert-carousel"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
                <button
                    className="tax-expert-arrow"
                    onClick={handlePrev}
                    disabled={page === 0}
                    aria-label="Previous"
                    style={{ transform: "rotate(180deg)" }}
                >
                    <IoIosArrowForward />
                </button>

				<div className="tax-expert-list">
					{visibleExperts.map((exp, idx) => (
						<div
							className="tax-expert-card"
							key={`${exp.name}-${page}-${idx}`}
						>
							<div className="tax-expert-img-wrap">
								<img
									src={exp.img}
									alt={exp.name}
									className="tax-expert-img"
								/>
							</div>
							<div className="tax-expert-name">{exp.name}</div>
							<div className="tax-expert-role">{exp.role}</div>
						</div>
					))}
				</div>

                <button
                    className="tax-expert-arrow"
                    onClick={handleNext}
                    disabled={page === totalPages - 1}
                    aria-label="Next"
                >
                    <IoIosArrowForward />
                </button>
			</div>

			<div className="tax-expert-dots">
				{Array.from({ length: totalPages }).map((_, i) => (
					<span
						key={i}
						className={`tax-expert-dot${
							i === page ? " active" : ""
						}`}
						onClick={() => handleDotClick(i)}
					/>
				))}
			</div>

			{/* Second Carousel */}
			<div
				className="tax-expert-carousel tax-expert-carousel-second"
				onMouseEnter={handleMouseEnterSecond}
				onMouseLeave={handleMouseLeaveSecond}
			>
                <button
                    className="tax-expert-arrow"
                    onClick={handlePrevSecond}
                    disabled={pageSecond === 0}
                    aria-label="Previous Second Carousel"
                    style={{ transform: "rotate(180deg)" }}
                >
                    <IoIosArrowForward />
                </button>

				<div className="tax-expert-list">
					{visibleExpertsSecond.map((exp, idx) => (
						<div
							className="tax-expert-card"
							key={`second-${exp.name}-${pageSecond}-${idx}`}
						>
							<div className="tax-expert-img-wrap">
								<img
									src={exp.img}
									alt={exp.name}
									className="tax-expert-img"
								/>
							</div>
							<div className="tax-expert-name">{exp.name}</div>
							<div className="tax-expert-role">{exp.role}</div>
						</div>
					))}
				</div>

                <button
                    className="tax-expert-arrow"
                    onClick={handleNextSecond}
                    disabled={pageSecond === totalPagesSecond - 1}
                    aria-label="Next Second Carousel"
                >
                    <IoIosArrowForward />
                </button>
			</div>

			<div className="tax-expert-dots">
				{Array.from({ length: totalPagesSecond }).map((_, i) => (
					<span
						key={`second-${i}`}
						className={`tax-expert-dot${
							i === pageSecond ? " active" : ""
						}`}
						onClick={() => handleDotClickSecond(i)}
					/>
				))}
			</div>
		</section>
	);
}
