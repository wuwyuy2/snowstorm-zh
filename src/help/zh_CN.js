export default {
	general: {
		title: '通用',
		pages: {
			overview: {
				title: '简介',
				text: [
					'Snowstorm是一款可视化创建和编辑“我的世界基岩版”粒子的工具。',
					{type: 'h2', text: '文档'},
					{type: 'link', text: '粒子简介', href: 'https://learn.microsoft.com/en-us/minecraft/creator/reference/content/particlesreference/particlesintroduction'},
					{type: 'link', text: 'Snowstorm简介', href: 'https://learn.microsoft.com/en-us/minecraft/creator/documents/particleeffects'},
					{type: 'link', text: '粒子组件列表', href: 'https://learn.microsoft.com/en-us/minecraft/creator/reference/content/particlesreference/particlecomponentlist'},
					{type: 'h2', text: '教程'},
					{type: 'link', text: 'McHorse，如何使用Snowstorm创建粒子效果', href: 'https://youtu.be/J1Ub1tbO9gg'},
					{type: 'h2', text: '相关链接'},
					{type: 'link', text: 'Snowstorm Discord服务器', href: 'https://discord.gg/W9d78Z8AvM'},
				]
			},
			molang: {
				title: 'Molang参考',
				text: [
					'Molang是一种类似C语言的脚本，可用于动态计算粒子属性。Snowstorm中大部分数值都支持此功能。',
            		{type: 'link', href: 'https://docs.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction', text: 'Molang完整文档'},
					'本页作为参考表，列出了所有内置变量和数学函数。',
					'注意：Molang中所有与角度相关的单位均是角度，而非弧度或其他。',

					{type: 'h2', text: '变量'},

                	{type: 'code', code: 'variable.emitter_lifetime', text: '发射器的生命周期'},
                	{type: 'code', code: 'variable.emitter_age', text: '发射器的寿命'},
                	{type: 'code', code: 'variable.emitter_random_1', text: '0至1之间的随机数，每次发射器循环时为常量'},
                	{type: 'code', code: 'variable.emitter_random_2', text: '随机数，同上'},
                	{type: 'code', code: 'variable.emitter_random_3', text: '随机数，同上'},
                	{type: 'code', code: 'variable.emitter_random_4', text: '随机数，同上'},
                	{type: 'code', code: 'variable.particle_lifetime', text: '粒子的生命周期'},
                	{type: 'code', code: 'variable.particle_age', text: '粒子的寿命'},
                	{type: 'code', code: 'variable.particle_random_1', text: '0至1之间的随机数，每个粒子为常量'},
                	{type: 'code', code: 'variable.particle_random_2', text: '随机数，同上'},
                	{type: 'code', code: 'variable.particle_random_3', text: '随机数，同上'},
                	{type: 'code', code: 'variable.particle_random_4', text: '随机数，同上'},
                	{type: 'code', code: 'variable.entity_scale', text: '附加实体的缩放'},

					{type: 'h2', text: '数学运算'},
			
            		{type: 'code', code: 'math.abs(value)', text: '绝对值'},
            		{type: 'code', code: 'math.sin(value)', text: '正弦值(角度)'},
            		{type: 'code', code: 'math.cos(value)', text: '余弦值(角度)'},
            		{type: 'code', code: 'math.clamp(value, min, max)', text: '将数值限制在min至max之间(闭区间)'},
            		{type: 'code', code: 'math.ceil(value)', text: '向上取整到最近的整数'},
            		{type: 'code', code: 'math.floor(value)', text: '向下取整到最近的整数'},
            		{type: 'code', code: 'math.trunc(value)', text: '向零截断'},
            		{type: 'code', code: 'math.round(value)', text: '四舍五入至最近的整数'},
            		{type: 'code', code: 'math.mod(value, denominator)', text: '取余数'},
            		{type: 'code', code: 'math.pow(base, exponent)', text: '幂'},
            		{type: 'code', code: 'math.sqrt(value)', text: '算术平方根'},
            		{type: 'code', code: 'math.exp(value)', text: 'e的value次幂'},
            		{type: 'code', code: 'math.pi', text: '圆周率'},
            		{type: 'code', code: 'math.max(A, B)', text: 'A或B中的较大值'},
            		{type: 'code', code: 'math.min(A, B)', text: 'A或B中的较小值'},
            		{type: 'code', code: 'math.min_angle(value)', text: '将角度大小最小化到[-180, 180]范围内(角度)'},
            		{type: 'code', code: 'math.asin(value)', text: '反正弦值'},
            		{type: 'code', code: 'math.acos(value)', text: '反余弦值'},
            		{type: 'code', code: 'math.atan(value)', text: '反正切值'},
            		{type: 'code', code: 'math.atan2(y, x)', text: 'y/x的反正切值。注意参数顺序！'},
            		{type: 'code', code: 'math.random(low, high)', text: 'low至high之间的随机值(浮点数，闭区间)'},
            		{type: 'code', code: 'math.random_integer(low, high)', text: 'low至high之间的随机整数值(闭区间)'},
            		{type: 'code', code: 'math.die_roll(num, low, high)', text: '返回num个随机数的总和，每个随机数从low至high之间取得。注意：生成的随机数不是整数，若是普通骰子请使用`math.die_roll_integer`。'},
            		{type: 'code', code: 'math.die_roll_integer(num, low, high)', text: '返回num个随机整数的总和，每个整数从low至 high之间取得。注意：生成的随机数是整数，和普通骰子一样。'},
            		{type: 'code', code: 'math.hermite_blend(value)', text: '使用Hermite基函数之一进行简单平滑曲线插值：`3t^2 - 2t^3`。注意：虽然任何有效浮点数都是有效输入，但此函数在[0,1]范围内效果最佳。'},
            		{type: 'code', code: 'math.lerp(start, end, 0_to_1)', text: '通过 0_to_1 从 start 线性插值到 end'},
            		{type: 'code', code: 'math.lerprotate(start, end, 0_to_1)', text: '通过 0_to_1 沿最短方向从 start 度插值到 end 度'},
            		{type: 'code', code: 'math.ln(value)', text: '自然对数'},
				]
			}
		}
	},
	effect: {
		title: '文件',
		pages: {
			meta: {
				title: '文件',
				inputs: {
					identifier: {
						type: 'text',
						text: [
							'标识符由命名空间和粒子名称两部分组成。两者之间用冒号分隔',
							'标识符应全部使用小写字母，以及用下划线分隔单词。允许使用小写字母a-z、数字0-9、点和下划线，其他字符可能会出问题。',
							'示例：snowstorm:fire',
							'标识符可在游戏中引用该粒子效果，例如在粒子命令、脚本或实体中。'
						]
					},
				}
			},
			space: {
				title: '空间',
				inputs: {
					local_position: {
						type: 'toggle',
						display_input_info: false,
						text: [
							'启用后，粒子将始终在相对于发射器的本地空间中运动。当附加到实体时，这意味着所有粒子将随实体一起移动。',
							'禁用后，粒子相对于发射器发射，然后在世界中独立于发射器模拟',
							'启用此项将阻止与世界的碰撞生效。',
						]
					},
					local_rotation: {
						type: 'toggle',
						display_input_info: false,
						text: [
							'沿附加的实体旋转本地空间。参见本地位置',
							'本地位置需要启用才能使本地旋转生效',
						]
					},
					local_velocity: {
						type: 'toggle',
					}
				}
			}
		}
	},
	emitter: {
		title: '发射器',
		pages: {
			rate: {
				title: '生成数量',
				text: [],
				inputs: {
					mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '稳定'},
							'粒子在发射器的生命周期内稳定生成',
							{type: 'h3', text: '即时'},
							'所有粒子在发射器生命周期开始时立即全部生成',
							{type: 'h3', text: '手动'},
							'粒子独立于发射器手动生成。用于部分原版效果，以及通过事件使用「粒子」类型触发的粒子效果。'
						]
					},
					rate: {
						type: 'molang',
						evaluation: 'per_tick'
					},
					amount: {
						type: 'molang',
						evaluation: 'once'
					},
					maximum: {
						type: 'molang',
						evaluation: 'per_tick'
					},
				}
			},
			lifetime: {
				title: '发射器生命周期',
				text: '控制发射器的持续时间以及是否循环。',
				inputs: {
					mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '循环'},
							'发射器将循环播放直到被移除。',
							{type: 'h3', text: '一次'},
							'发射器执行一次，一旦生命周期结束或允许发射的粒子数量已全部发射，发射器即销毁。',
							{type: 'h3', text: '表达式'},
							'当激活表达式非零时，发射器「开启」；为零时「关闭」。适用于通过实体变量驱动实体附加发射器等场景。'
						]
					},
					active_time: {
						type: 'molang',
						evaluation: 'per_loop'
					},
					sleep_time: {
						type: 'molang',
						evaluation: 'per_loop'
					},
					activation: {
						type: 'molang',
						evaluation: 'per_tick'
					},
					expiration: {
						type: 'molang',
						evaluation: 'per_tick'
					},
				}
			},
			shape: {
				title: '生成形状',
				text: '控制粒子生成的位置和形状。',
				inputs: {
					mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '点'},
							'在发射器位置的单个点生成粒子。',
							{type: 'h3', text: '球体'},
							'以球形生成粒子。',
							{type: 'h3', text: '立方体'},
							'以立方体形生成粒子',
							{type: 'h3', text: '圆盘'},
							'以圆盘形生成粒子。',
							{type: 'h3', text: '实体碰撞箱'},
							'以尺寸适应粒子所附加实体的碰撞箱的立方体形生成粒子。仅在客户端播放的粒子上生效。',
						]
					},
					offset: {
						type: 'molang',
						evaluation: 'once',
						context: 'particle'
					},
					radius: {
						type: 'molang',
						evaluation: 'once',
						context: 'particle'
					},
					half_dimensions: {
						type: 'molang',
						evaluation: 'once',
						context: 'particle'
					},
					plane_normal: {
						type: 'molang',
						evaluation: 'once',
						context: 'particle'
					},
					surface_only: {
						type: 'toggle',
					},
				}
			}
		}
	},
	motion: {
		title: '运动',
		overview: [

		],
		pages: {
			motion: {
				title: '运动',
				inputs: {
					mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '动态'},
							'粒子根据初始速度、加速度和阻力动态运动。',
							{type: 'h3', text: '参数化'},
							'粒子位置每 tick 通过偏移向量计算。注意：此模式仅在本地空间中工作，不支持碰撞和方块检测。',
							{type: 'h3', text: '静态'},
							'粒子不会移动。',
						]
					},
					direction_mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '向外'},
							'粒子方向设置为远离发射器',
							{type: 'h3', text: '向内'},
							'粒子方向设置为朝向发射器',
							{type: 'h3', text: '自定义'},
							'在方向字段中设置自定义方向向量'
						]
					},
					direction: {
						type: 'molang',
						context: 'particle',
						evaluation: 'once'
					},
					linear_speed: {
						type: 'molang',
						context: 'particle',
						evaluation: 'once'
					},
					linear_acceleration: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick'
					},
					linear_drag_coefficient: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
						text: [
							'阻力使粒子随时间减速。也可以使用负值使粒子加速。'
						]
					},
					relative_position: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick'
					},
					relative_direction: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick'
					},
				}
			},
			rotation: {
				title: '旋转',
				inputs: {
					mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '动态'},
							'粒子根据初始速度、加速度和阻力动态旋转。',
							{type: 'h3', text: '参数化'},
							'粒子旋转每 tick 通过 Molang 表达式计算。',
						]
					},
					initial_rotation: {
						type: 'molang',
						context: 'particle',
						evaluation: 'once',
					},
					rotation_rate: {
						type: 'molang',
						context: 'particle',
						evaluation: 'once',
					},
					rotation_acceleration: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					rotation_drag_coefficient: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					rotation: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
						text: '用于参数化旋转。'
					},
				}
			},
			collision: {
				title: '碰撞',
				text: [
					'启用碰撞以允许粒子与世界中的方块发生碰撞。',
					'碰撞仅在粒子在世界空间中运动且使用动态运动模式时生效。',
					'碰撞时，粒子可以设置为反弹或在接触时销毁。也可以执行事件。',
					'在 Snowstorm 预览中，粒子会与网格所示的地面发生碰撞。可通过视口下方工具栏中的「预览碰撞」按钮开启或关闭。'
				],
				inputs: {
					toggle: {
						type: 'toggle',
					},
					collision_radius: {
						type: 'number',
					},
					collision_drag: {
						type: 'number',
						text: [
							'用于模拟碰撞时的摩擦/阻力，例如粒子碰到地面后会减速停止。',
							'粒子以阻力值（方块/秒）减速。'
						]
					},
					coefficient_of_restitution: {
						type: 'number',
						text: [
							'也称为弹性恢复系数。'
						]
					},
					condition: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick'
					},
					events: {
						type: 'event_trigger'
					},
					expire_on_contact: {
						type: 'toggle',
					},
				}
			}
		}
	},
	appearance: {
		title: '外观',
		pages: {
			appearance: {
				title: '外观',
				inputs: {
					size: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					material: {
						type: 'select',
						text: [
							{type: 'h3', text: '透明度测试'},
							'透明度测试材质允许完全不透明和完全透明的像素，但不存在中间状态。',
							{type: 'h3', text: '混合'},
							'混合模式支持像素的部分透明度。注意：使用此材质时，不同颜色的粒子即使来自不同效果，在游戏中从背后观察时可能会出现视觉闪烁。',
							{type: 'h3', text: '叠加'},
							'支持部分透明度。粒子以叠加混合方式渲染，非常适合创建光照效果。',
							{type: 'h3', text: '不透明'},
							'粒子完全不透明，不支持透明像素。',
							{type: 'h3', text: '自定义'},
							'输入自定义材质标识符。',
						]
					},
					facing_camera_mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '旋转 XYZ'},
							'在所有轴上旋转粒子使其与相机平行。',
							{type: 'h3', text: '旋转 Y'},
							'在 Y 轴上旋转粒子使其与相机平行。',
							{type: 'h3', text: '朝向相机 XYZ'},
							'在所有轴上旋转粒子使其指向相机。',
							{type: 'h3', text: '朝向相机 Y'},
							'在 Y 轴上旋转粒子使其指向相机。',
							{type: 'h3', text: '朝向方向'},
							'围绕粒子自身方向向量的轴旋转粒子使其指向相机。',
							{type: 'h3', text: '方向 X'},
							'旋转粒子使其朝向自身方向向量的 X 方向。',
							{type: 'h3', text: '方向 Y'},
							'旋转粒子使其朝向自身方向向量的 Y 方向。',
							{type: 'h3', text: '方向 Z'},
							'旋转粒子使其朝向自身方向向量的 Z 方向。',
							{type: 'h3', text: '发射器 XY 平面'},
							'沿发射器的 XY 平面旋转粒子',
							{type: 'h3', text: '发射器 XZ 平面'},
							'沿发射器的 XZ 平面旋转粒子',
							{type: 'h3', text: '发射器 YZ 平面'},
							'沿发射器的 YZ 平面旋转粒子',
						]
					},
					direction_mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '从运动'},
							'当粒子速度超过自定义阈值时，从其运动向量推导粒子方向。',
							{type: 'h3', text: '自定义'},
							'设置自定义方向向量。',
						]
					},
					speed_threshold: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					direction: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					light: {
						type: 'toggle',
					},
				}
			},
			color: {
				title: '颜色',
				text: [
					'使用特定颜色对粒子进行着色。如果材质支持混合模式，则支持透明度。',
					'颜色通过乘法应用，这意味着白色纹理是着色的理想基底。'
				],
				inputs: {
					mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '静态'},
							'设置静态颜色来着色粒子。',
							{type: 'h3', text: '渐变'},
							'使用渐变确定粒子颜色。',
							{type: 'h3', text: '表达式'},
							'通过 RGBA 每个颜色通道的表达式计算着色颜色。',
						]
					},
					picker: {
						type: 'color',
					},
					interpolant: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
						text: [
							'示例：当范围为 1 时，表达式「variable.particle_age / variable.particle_lifetime」将沿粒子生命周期映射渐变。'
						]
					},
					range: {
						type: 'number',
					},
					gradient: {
						type: 'color',
					},
					expression: {
						label: '颜色表达式',
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
				}
			},
		}
	},
	texture: {
		title: '纹理与UV',
		pages: {
			texture: {
				title: '纹理',
				inputs: {
					path: {
						type: 'text',
						text: [
							'路径应始终使用正斜杠，且不应包含文件扩展名。'
						]
					},
					image: {
						type: 'image',
						label: '图像',
						text: [
							'在 VS Code 中，图像会从提供的纹理路径自动加载。要使用此功能，请确保在 VS Code 中将整个纹理包文件夹作为项目打开，而不仅仅是单个粒子文件。',
							'在 Web 应用中，需要上传 PNG 文件才能预览，除非使用了内置的原版粒子文件。',
							'支持使用提供的编辑工具在纹理上绘制。'
						]
					}
				}
			},
			uv: {
				title: 'UV',
				text: 'UV 映射决定了纹理的哪一部分被映射到粒子看板上。UV 映射也负责创建动画纹理。',
				inputs: {
					mode: {
						type: 'select',
						text: [
							{type: 'h3', text: '静态'},
							'设置静态 UV 映射，可选配合使用 Molang 表达式。',
							{type: 'h3', text: '全尺寸'},
							'将 UV 映射设置为纹理的完整尺寸。',
							{type: 'h3', text: '动画'},
							'创建带有翻页纹理动画的 UV 映射。',
						]
					},
					size: {
						type: 'number',
						text: '此尺寸用于设置 UV 映射的基础尺寸。不必与实际纹理分辨率相同，但宽高比应保持一致。'
					},
					uv: {
						type: 'number',
						context: 'particle',
						evaluation: 'per_tick',
					},
					uv_size: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					uv_step: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					frames_per_second: {
						type: 'number',
					},
					max_frame: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick',
					},
					stretch_to_lifetime: {
						type: 'toggle',
					},
					loop: {
						type: 'toggle',
					},
				}
			},
		}
	},
	lifetime: {
		title: '时间',
		pages: {
			lifetime: {
				title: '粒子生命周期',
				inputs: {
					max_lifetime: {
						type: 'molang',
						context: 'particle',
						evaluation: 'once',
						text: [
							'这将在粒子上设置 particle_lifetime 变量，一旦 particle_age 达到生命周期，粒子即销毁。'
						]
					},
					expiration_expression: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick'
					},
					kill_plane: {
						type: 'number'
					},
					expire_in: {
						type: 'list'
					},
					expire_outside: {
						type: 'list'
					},
				}
			},
		}
	},
	events: {
		title: '事件',
		pages: {
			events: {
				title: '事件',
				text: [
					'创建可由发射器或粒子触发的事件。事件可用于触发额外的粒子效果、播放声音或运行 Molang 表达式。',
					'事件可以由事件子部分组成，子部分可以随机化或按顺序播放。子部分支持嵌套。',
					{type: 'h2', text: '序列'},
					'序列可用于依次触发多个事件子部分。',
					{type: 'h2', text: '随机'},
					'从随机列表中随机选择一个子部分。子部分可通过权重字段设置权重，权重越高越容易被选中。',
					'可以将某个随机子部分留空，以增加什么都不发生的概率。',

					{type: 'h2', text: '粒子'},
					'在触发事件的位置生成新的粒子效果。',
					{
						type: 'input_list',
						inputs: {
							identifier: {
								type: 'text',
								label: '标识符',
								text: [
									'输入要触发的粒子效果的标识符。',
								]
							},
							type: {
								type: 'select',
								label: '类型',
								text: '选择粒子效果的播放方式。',
								text: [
									{type: 'h3', text: '发射器'},
									'在事件的世界位置创建指定粒子效果的发射器。',
									{type: 'h3', text: '绑定发射器'},
									'在事件位置创建指定粒子效果的发射器。如果触发发射器绑定到实体或定位器，新发射器将绑定到相同的实体或定位器。',
									{type: 'h3', text: '粒子'},
									'在事件位置的指定类型发射器上手动生成一个粒子，如发射器不存在则创建。',
									'务必在子粒子效果上将生成数量模式设置为「手动」。',
									{type: 'h3', text: '带速度的粒子'},
									'与「粒子」相同，但新粒子将继承生成粒子的速度。',
								]
							},
							expression: {
								label: '表达式',
								type: 'molang',
								context: 'spawned_emitter',
								evaluation: 'once',
								text: [
									'在新生成的发射器上运行的 Molang 表达式。注意：无法访问触发事件发射器的变量作用域。'
								]
							}
						}
					},

					{type: 'h2', text: '音效'},
					'在触发事件的位置播放音效。',
					{
						type: 'input_list',
						inputs: {
							identifier: {
								type: 'text',
								label: '音效事件',
								text: [
									'输入要触发的音效标识符。由于 Minecraft 的一个 bug，仅支持原版音效事件。',
								]
							}
						}
					},

					{type: 'h2', text: '表达式'},
					'在触发事件的发射器上运行 Molang 表达式。可用于改变值或变量。',
					{
						type: 'input_list',
						inputs: {
							expression: {
								label: '表达式',
								type: 'molang',
								context: 'emitter',
								evaluation: 'once',
								text: [
									'在触发事件的发射器上运行的 Molang 表达式。'
								]
							}
						}
					},
				],
				inputs: {
				}
			},
			emitter_events: {
				title: '发射器事件触发器',
				text: [
					'在发射器生命周期的特定时刻触发事件。'
				],
				inputs: {
					creation: {
						type: 'event_trigger'
					},
					expiration: {
						type: 'event_trigger'
					},
					travel_distance: {
						type: 'event_trigger'
					},
					looping_travel_distance: {
						type: 'event_trigger'
					},
					timeline: {
						type: 'event_trigger'
					},
				}
			},
			particle_events: {
				title: '粒子事件触发器',
				text: [
					'在粒子生命周期的特定时刻触发事件。'
				],
				inputs: {
					creation: {
						type: 'event_trigger'
					},
					expiration: {
						type: 'event_trigger'
					},
					timeline: {
						type: 'event_trigger'
					},
				}
			},
		}
	},
	variables: {
		title: '变量与曲线',
		pages: {
			variables: {
				title: '变量',
				inputs: {
					creation_vars: {
						type: 'molang',
						context: 'emitter',
						evaluation: 'once'
					},
					tick_vars: {
						type: 'molang',
						context: 'emitter',
						evaluation: 'per_tick'
					},
					particle_update: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_tick'
					},
					particle_render: {
						type: 'molang',
						context: 'particle',
						evaluation: 'per_render'
					},
				}
			},
			curves: {
				title: '曲线',
				text: [
					'曲线是一种使用曲线将输出映射到值的方法。',
					'例如，可以创建一条映射到粒子生命周期的曲线。然后可以在粒子尺寸字段中引用该曲线，用曲线动画化粒子尺寸。',
					'曲线可以被多次访问，只要输入和范围中使用的变量可用，即可在发射器和粒子上下文中使用。'
				],
				inputs: {
					id: {
						label: '名称',
						type: 'text',
						text: '稍后在 Molang 表达式中使用的 Molang 变量。必须以「variable.」开头。',
					},
					mode: {
						type: 'select',
						label: '模式',
						info: '曲线插值类型',
						text: [
							{type: 'h3', text: 'Catmull Rom'},
							'沿 4 个或多个控制点的平滑曲线。第一个和最后一个点仅用于控制，不属于曲线部分。',
							{type: 'h3', text: '线性'},
							'沿 3 个或多个控制点的线性曲线。',
							{type: 'h3', text: '贝塞尔'},
							'单条贝塞尔曲线，使用起点和终点以及两个控制点。',
							{type: 'h3', text: '贝塞尔链'},
							'由多条独立贝塞尔曲线组成的更大曲线。',
						]
					},
					input: {
						type: 'molang',
						context: 'curve',
						evaluation: 'per_use',
						label: '输入',
						text: [
							'水平输入',
						]
					},
					range: {
						type: 'molang',
						context: 'curve',
						evaluation: 'per_use',
						label: '范围',
						text: [
							'输入映射到的水平范围',
						]
					},
				}
			},
		}
	},
}