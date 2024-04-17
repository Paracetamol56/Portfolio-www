
<template>
	<footer>
		<div class="container">
			<ul class="footer-logo-list">
				<li class="footer-logo-item">
					<a
						href="https://github.com/Paracetamol56"
						name="GitHub"
						target="_blank"
						class="footer-logo-link"
					>
						<img
							class="footer-logo-image"
							src="https://cdn.simpleicons.org/github/f5f3fa"
							alt="GitHub"
						/>
					</a>
				</li>
				<li class="footer-logo-item">
					<a
						href="https://www.linkedin.com/in/matheogaluba/"
						name="Linkedin"
						target="_blank"
						class="footer-logo-link"
					>
						<img
							class="footer-logo-image"
							src="https://cdn.simpleicons.org/linkedin/f5f3fa"
							alt="Linkedin"
						/>
					</a>
				</li>
				<li class="footer-logo-item">
					<a
						href="mailto:matheo.galu56@gmail.com"
						name="Mail"
						target="_blank"
						class="footer-logo-link"
					>
						<img
							class="footer-logo-image"
							src="https://cdn.simpleicons.org/gmail/f5f3fa"
							alt="Mail"
						/>
					</a>
				</li>
				<li class="footer-logo-item">
					<a
						href="https://paracetamol56.itch.io"
						name="Itch.io"
						target="_blank"
						class="footer-logo-link"
					>
						<img
							class="footer-logo-image"
							src="https://cdn.simpleicons.org/itchdotio/f5f3fa"
							alt="Itch.io"
						/>
					</a>
				</li>
				<li class="footer-logo-item">
					<a
						href="https://www.printables.com/@MatheoGaluba_1537385"
						name="Printables"
						target="_blank"
						class="footer-logo-link"
					>
						<img
							class="footer-logo-image"
							src="https://cdn.simpleicons.org/printables/f5f3fa"
							alt="Printables"
						/>
					</a>
				</li>
				<li class="footer-logo-item">
					<a
						href="https://t.me/paracetamol_56"
						name="Telegram"
						target="_blank"
						class="footer-logo-link"
					>
						<img
							class="footer-logo-image"
							src="https://cdn.simpleicons.org/telegram/f5f3fa"
							alt="Telegram"
						/>
					</a>
				</li>
				<li class="footer-logo-item">
					<a
						href="https://discordapp.com/users/609748578004500517/"
						name="Discord"
						target="_blank"
						class="footer-logo-link"
					>
						<img
							class="footer-logo-image"
							src="https://cdn.simpleicons.org/discord/f5f3fa"
							alt="Discord"
						/>
					</a>
				</li>
			</ul>
			<div class="footer-author">
				<p>
					{{ $t("footer.made.with") }}
					<span class="hearth">
						<svg
							class="hearth-vector"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
							/>
						</svg>
					</span>
					{{ $t("footer.made.by", ["Mathéo Galuba"]) }}
					-
					{{ $t("footer.made.under") }}
					<a
						href="https://github.com/Paracetamol56/Portfolio/blob/master/LICENSE"
						target="_blank"
						rel="nofollow"
					>
						{{ $t("footer.made.license") }}
					</a>
				</p>
			</div>
			<div class="footer-credits">
				<p>
					{{ $t("footer.tech.with") }}
					<a href="https://vuejs.org/" target="_blank" rel="nofollow">Vue.js</a>
					{{ $t("footer.tech.and") }}
					<a href="https://netlify.com/" target="_blank" rel="nofollow">
						Netlify</a
					>. {{ $t("footer.tech.source") }}
					<a
						href="https://github.com/Paracetamol56/Portfolio"
						target="_blank"
						rel="nofollow"
					>
						GitHub</a
					>.
				</p>
			</div>
		</div>
		<div class="bottom-gradient"></div>
	</footer>
</template>

<script>
export default {
	name: "PageFooter",
};
</script>

<style scoped lang="scss">
footer {
	width: 100%;
	padding: 50px 0;
	position: relative;
	background-color: #111416;
	.footer-logo-list {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 40%;
		margin: 0 auto 20px;
		padding: 0;
		list-style: none;
		.footer-logo-item {
			margin: 0 10px;
			.footer-logo-link {
				.footer-logo-image {
					width: 2rem;
					height: 2rem;
				}
			}
		}
	}
	.footer-author {
		font-family: "Fira Code", monospace;
		font-size: 0.8rem;
		font-weight: 300;
		text-align: center;
		color: #ffffff;
		margin: 20px 0;
		padding: 0;
		span.hearth {
			color: #ffffff;
			transition: all 0.25s var(--easing);
			&:hover {
				color: #8251e9;
				transition: all 0.25s var(--easing);
			}
			svg.hearth-vector {
				max-height: 0.8rem;
			}
		}
	}
	.footer-credits {
		font-family: "Fira Code", monospace;
		font-size: 0.8rem;
		font-weight: 300;
		text-align: center;
		color: #ffffff;
		margin: 20px 0;
		padding: 0;
	}
	a {
		color: #ffffff;
		text-decoration: dotted underline;
		transition: all 0.25s var(--easing);
		&:hover {
			color: #8251e9;
			text-decoration: solid underline;
			transition: all 0.25s var(--easing);
		}
	}
	.bottom-gradient {
		width: 100%;
		height: 10px;
		background-image: linear-gradient(
			90deg,
			#b4e2f9 0%,
			#5f78ef 25%,
			#8251e9 50%,
			#ad56e3 75%,
			#df7bf5 100%
		);
		position: absolute;
		bottom: 0;
	}
}
</style>