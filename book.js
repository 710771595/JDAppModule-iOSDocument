let config = {
	language: 'zh-hans',
	plugins: [
		'-sharing',
		'search',
		'-fontsettings',
		'-theme-default',
		'tbfed-pagefooter',
		'yahei',
		'theme-doc-public@git+ssh://git@coding.jd.com:abook-plugins/theme-doc-public.git',
		'search-plus',
		'expandable-chapters@git+ssh://git@coding.jd.com:abook-plugins/plugin-jda-expandable-chapters.git'
	],
	pluginsConfig: {
		'theme': {
			header: {
				logo: '',
				src: '',
				title: '',
				favicon: '',
				nav: [
					{
						link: '',
						label: '链接'
					}
				]
			},
			footer: {
				links: [
					{
						link: '',
						label: '联系我们'
					},
					{
						link: '',
						label: '关于我们'
					}
				],
				copyright: 'Copyright © 2004-2018 京东JD.com 版权所有'
			}
		},
		'tbfed-pagefooter': {
			modify_label: '修订时间：',
			modify_format: 'YYYY-MM-DD HH:mm:ss'
		}
	}
}

module.exports = config

