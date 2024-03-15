<script lang="ts" setup>
import { defineProps } from "vue";
import { Code, Cog, Brain, ListTodo, Gamepad2, ServerCog } from "lucide-vue-next";

const props = defineProps({
	number: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<section id="formations">
		<div class="container">
			<div class="section-title fade-in">
				<h2>
					<span class="section-title-number">{{ number }}.</span>
					{{ $t("about.skills.title") }}
				</h2>
				<hr />
			</div>
			<div class="skill-subsection">
				<h3 class="fillTextWithgradient fade-in">
					{{ $t("about.skills.languages") }}
				</h3>
				<ul class="lang-list">
					<li class="lang-item fade-in">
						<p class="lang-item-hello">{{ $t("about.skills.languages.1.hello") }}</p>
						<hr />
						<h4 class="lang-item-name">
							{{ $t("about.skills.languages.1.name") }}
						</h4>
						<p class="lang-item-level">// {{ $t("about.skills.languages.1.level") }}</p>
					</li>
					<li class="lang-item fade-in">
						<p class="lang-item-hello">{{ $t("about.skills.languages.2.hello") }}</p>
						<hr />
						<h4 class="lang-item-name">
							{{ $t("about.skills.languages.2.name") }}
						</h4>
						<p class="lang-item-level">// {{ $t("about.skills.languages.2.level") }}</p>
						<p class="lang-item-eu-level">
							// {{ $t("about.skills.languages.2.eu-level") }}
						</p>
					</li>
					<li class="lang-item fade-in">
						<p class="lang-item-hello">{{ $t("about.skills.languages.3.hello") }}</p>
						<hr />
						<h4 class="lang-item-name">
							{{ $t("about.skills.languages.3.name") }}
						</h4>
						<p class="lang-item-level">// {{ $t("about.skills.languages.3.level") }}</p>
						<p class="lang-item-eu-level">
							// {{ $t("about.skills.languages.3.eu-level") }}
						</p>
					</li>
				</ul>
			</div>
			<div class="skill-subsection">
				<h3 class="fillTextWithgradient fade-in">
					{{ $t("about.skills.keywords") }}
				</h3>
				<ul class="skill-list fade-in">
					<li class="skill-item">
						<div class="skill-item-content">
							<div class="skill-item-content-visible">
								<Code color="var(--secondary-color)" :size="64" />
								<h4 class="skill-item-name">
									{{ $t("about.skills.keywords.1.name") }}
								</h4>
							</div>
							<div class="skill-item-content-invisible">
								<p class="skill-item-description">
									{{ $t("about.skills.keywords.1.description") }}
								</p>
							</div>
						</div>
					</li>
					<li class="skill-item">
						<div class="skill-item-content">
							<div class="skill-item-content-visible">
								<Cog color="var(--secondary-color)" :size="64" />
								<h4 class="skill-item-name">
									{{ $t("about.skills.keywords.2.name") }}
								</h4>
							</div>
							<div class="skill-item-content-invisible">
								<p class="skill-item-description">
									{{ $t("about.skills.keywords.2.description") }}
								</p>
							</div>
						</div>
					</li>
					<li class="skill-item">
						<div class="skill-item-content">
							<div class="skill-item-content-visible">
								<Brain color="var(--secondary-color)" :size="64" />
								<h4 class="skill-item-name">
									{{ $t("about.skills.keywords.3.name") }}
								</h4>
							</div>
							<div class="skill-item-content-invisible">
								<p class="skill-item-description">
									{{ $t("about.skills.keywords.3.description") }}
								</p>
							</div>
						</div>
					</li>
					<li class="skill-item">
						<div class="skill-item-content">
							<div class="skill-item-content-visible">
								<ListTodo color="var(--secondary-color)" :size="64" />
								<h4 class="skill-item-name">
									{{ $t("about.skills.keywords.4.name") }}
								</h4>
							</div>
							<div class="skill-item-content-invisible">
								<p class="skill-item-description">
									{{ $t("about.skills.keywords.4.description") }}
								</p>
							</div>
						</div>
					</li>
					<li class="skill-item">
						<div class="skill-item-content">
							<div class="skill-item-content-visible">
								<Gamepad2 color="var(--secondary-color)" :size="64" />
								<h4 class="skill-item-name">
									{{ $t("about.skills.keywords.5.name") }}
								</h4>
							</div>
							<div class="skill-item-content-invisible">
								<p class="skill-item-description">
									{{ $t("about.skills.keywords.5.description") }}
								</p>
							</div>
						</div>
					</li>
					<li class="skill-item">
						<div class="skill-item-content">
							<div class="skill-item-content-visible">
								<ServerCog color="var(--secondary-color)" :size="64" />
								<h4 class="skill-item-name">
									{{ $t("about.skills.keywords.6.name") }}
								</h4>
							</div>
							<div class="skill-item-content-invisible">
								<p class="skill-item-description">
									{{ $t("about.skills.keywords.6.description") }}
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="skill-subsection">
				<h3 class="fillTextWithgradient fade-in">
					{{ $t("about.skills.technologies") }}
				</h3>

				<ul class="tech-list">
					<!-- C++ -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/cplusplus/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.1.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.1.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Rust -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/rust/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.2.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.2.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Python -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/python/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.3.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.3.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Git -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/git/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.4.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.4.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Unity -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/unity/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.5.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.5.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- SQL -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/postgresql/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.6.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.6.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Firebase -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/mongodb/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.7.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.7.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Frontend -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/html5/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.8.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.8.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Backend -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/nodedotjs/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.9.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.9.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Blender -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/blender/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.10.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.10.description')"></span>
							<br />*/
						</p>
					</li>
					<!-- Adobe -->
					<li class="tech-item fade-in">
						<img
							class="tech-item-icon"
							src="https://cdn.simpleicons.org/adobe/f5f3fa"
							alt="-icon"
						/>
						<p class="tech-item-name" v-html="$t('about.skills.technologies.11.name')"></p>
						<p class="tech-item-description">
							/*<br />
							<span v-html="$t('about.skills.technologies.11.description')"></span>
							<br />*/
						</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
h3 {
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 1rem;
	text-align: center;
}
.skill-subsection {
	margin: 3rem 0;
}
ul.lang-list {
	list-style: none;
	width: 100%;
	padding: 0;
	margin: 1rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 1rem;
	li.lang-item {
		margin: 0;
		p.lang-item-hello {
			margin: 0.5rem 0;
			font-size: 1.25rem;
			font-weight: 600;
		}
		hr {
			width: 100%;
			height: 2px;
			border: none;
			background-color: var(--secondary-color);
		}
		h4.lang-item-name {
			margin: 0.5rem 0;
		}
		p.lang-item-level {
			margin: 0;
			color: var(--comment-color);
		}
		p.lang-item-eu-level {
			margin: 0;
			color: var(--comment-color);
		}
	}
}
ul.skill-list {
	list-style: none;
	width: 100%;
	padding: 0;
	margin: 1rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 1rem;
	justify-content: center;
	align-items: center;
	li.skill-item {
		height: 200px;
		position: relative;
		overflow: hidden;
		background-image: linear-gradient(
			135deg,
			rgba(44, 27, 79, 0.6274509804) 70%,
			rgba(17, 20, 22, 0.6274509804) 100%
		);
		background-size: 400%;
		background-position: 100%;
		border-radius: var(--border-radius);
		transition: background-position 1s var(--easing);
		.skill-item-content {
			width: 100%;
			height: 200%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			flex-wrap: nowrap;
			transform: translateY(0);
			transition: transform 0.5s var(--easing);
			.skill-item-content-visible {
				flex: 0.5;
				width: 100%;
				margin: 0;
				padding: 1rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				svg.skill-item-content-vector {
					width: 100%;
					margin-top: auto;
					text-align: center;
					height: 4rem;
					color: var(--secondary-color);
				}
				h4.skill-item-title {
					width: 100%;
					margin-bottom: auto;
					text-align: center;
					font-size: 1.5rem;
				}
			}
			.skill-item-content-invisible {
				flex: 0.5;
				width: 100%;
				margin: 0;
				padding: 1rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				p {
					text-align: center;
				}
			}
		}
		&:hover {
			background-position: 0%;
			.skill-item-content {
				transform: translateY(-50%);
			}
		}
	}
}
ul.tech-list {
	list-style: none;
	width: 100%;
	padding: 0;
	margin: 1rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 2rem 1rem;
	li.tech-item {
		display: grid;
		grid-template-columns: 0fr 1fr;
		grid-template-rows: 0fr 0fr;
		gap: 0.5rem;
		grid-template-areas:
			"icon name"
			"icon description";
		img.tech-item-icon {
			grid-area: icon;
			width: 60px;
			height: 60px;
			margin: auto;
		}
		p.tech-item-name {
			grid-area: name;
			position: relative;
			width: fit-content;
			font-size: 1.25rem;
			font-weight: 600;
			color: var(--text-color);
			margin: 0;
			&::before {
				content: "";
				position: absolute;
				height: 100%;
				left: -2px;
				right: -2px;
				z-index: -1;
				background-color: var(--primary-color);
				transform: scaleX(0%);
				transform-origin: right;
				transition: transform 0.25s var(--easing);
			}
		}
		p.tech-item-description {
			grid-area: description;
			font-size: 1rem;
			color: var(--comment-color);
			margin: 0;
		}
		&:hover {
			.tech-item-name {
				&::before {
					transform: scaleX(100%);
					transform-origin: left;
				}
			}
		}
	}
}
</style>