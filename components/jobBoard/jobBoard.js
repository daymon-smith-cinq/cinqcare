import { useEffect } from "react";
import styles from "./jobBoard.module.scss";

const JobBoard = () => {
	// For the careers script
	useEffect(() => {
		// Prevent script from loading more than once
		if (window._jobscore_loader) return;

		const script = document.createElement("script");
		script.src =
			(location.protocol === "https:" ? "https:" : "http:") +
			"//widgets.jobscore.com/jobs/cinqcare/widget.js";
		script.async = true;
		script.type = "text/javascript";

		document.body.appendChild(script);
	}, []);

	return (
		<div
			className={`${styles.jobBoard} jobscore-jobs`}
			data-text-color="#333333"
			data-link-text-color="#3333FF"
			data-job-hover-bg-color="#F9F9F9"
			data-filter-fields="none"
			data-group-by="department"
		>
			<div className="js-fallback">
				<a href="https://careers.jobscore.com/jobs/cinqcare">CINQCARE jobs</a>{" "}
				powered by{" "}
				<a href="https://www.jobscore.com/">
					<img
						align="bottom"
						src="https://careers.jobscore.com/images/new/jobscore_logo_embed.png"
						alt="Applicant Tracking, Social Recruiting and Software Hiring Solution - JobScore"
					/>
				</a>
			</div>
		</div>
	);
};

export default JobBoard;
