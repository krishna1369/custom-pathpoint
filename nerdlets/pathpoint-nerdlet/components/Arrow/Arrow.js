import React from 'react';
export default class Arrow extends React.Component {
    render() {
        let { arrowWidth, lightColor, latencyPercentage, textLevelBar, showHealth} = this.props;
        const Ax = latencyPercentage != 0 ? 40 - (40 * latencyPercentage / 100) : 40;
        const pathArrow = "M 0 0 L " + arrowWidth + " 0 L " + (arrowWidth + 40) + " 40 L " + arrowWidth + " 80 L 0 80 L 40 40 Z";
        const viewBoxValue = "0 0 " + (arrowWidth + 40) + " 80";
        const pathPercentage = "M " + Ax + " " + Ax + " L " + (arrowWidth + Ax) + " " + Ax + " L " + (arrowWidth + 40) + " 40 L " + (arrowWidth + Ax) + " " + (80 - Ax) + " L " + Ax + " " + (80 - Ax) + " L 40 40 Z"
        const apdex = Math.round((1 - latencyPercentage/100)*100)/100;
        return (
            <svg fill="#ff0000" height="100%" width="100%" viewBox={viewBoxValue}>
                <path id="arrow" d={pathArrow} stroke="#d0d0d0" strokeWidth="1" fill="white" />
                <path id="arrow-blue-fill" d={pathPercentage} stroke="blue" strokeWidth="0" fill="#144867" />
                <circle cx="40" cy="40" r="8" stroke="white" strokeWidth="4" fill={lightColor} />
                <text
                    x={arrowWidth - 55}
                    y={43}
                    stroke="#144867"
                    strokeWidth={2}
                    className="textLevelBar">
                    {textLevelBar}
                </text>
                <text
                    x={arrowWidth - 55}
                    y={43}
                    fill="#f0f0f0"
                    className="textLevelBar">
                    {textLevelBar}
                </text>

                <text
                    x={arrowWidth}
                    y={43}
                    stroke="#144867"
                    strokeWidth={2}
                    className="textLevelBar">
                    {apdex}
                </text>
                <text
                    x={arrowWidth}
                    y={43}
                    fill="#f0f0f0"
                    className="textLevelBar">
                    {apdex}
                </text>

                {showHealth ?
                <g>
                    <svg width="30" height="19" x="0" y="30" viewBox="0 0 30 19" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9078 18.8379C14.8075 18.8379 14.7098 18.8061 14.6288 18.747C8.8271 14.5151 5.74056 10.5229 5.45493 6.8826C5.37136 6.16329 5.43371 5.43453 5.63824 4.73987C5.84277 4.04522 6.18528 3.39894 6.6453 2.83969C7.11265 2.21735 7.71854 1.71244 8.41495 1.36497C9.11136 1.01751 9.87914 0.837048 10.6574 0.837894C12.2214 0.899048 13.719 1.4862 14.9078 2.50432C16.0966 1.4862 17.5942 0.899048 19.1582 0.837894C19.9363 0.837011 20.704 1.01746 21.4002 1.36494C22.0965 1.71241 22.7022 2.21734 23.1694 2.83969C23.6296 3.39882 23.9723 4.04507 24.1769 4.73975C24.3815 5.43443 24.4439 6.16326 24.3602 6.8826C24.3289 7.23961 24.2727 7.594 24.192 7.94318H26.3634C26.4752 7.62713 26.695 7.36076 26.9842 7.19114C27.2733 7.02152 27.6131 6.95959 27.9435 7.01627C28.2739 7.07296 28.5736 7.24462 28.7897 7.50092C29.0058 7.75721 29.1243 8.08164 29.1243 8.41687C29.1243 8.75209 29.0058 9.07652 28.7897 9.33281C28.5736 9.58911 28.2739 9.76077 27.9435 9.81746C27.6131 9.87414 27.2733 9.81221 26.9842 9.64259C26.695 9.47297 26.4752 9.2066 26.3634 8.89055H23.9287C22.8657 11.9742 19.9398 15.2801 15.1868 18.747C15.1058 18.8061 15.0081 18.8379 14.9078 18.8379ZM27.9605 8.02301C27.8826 7.97096 27.791 7.94318 27.6973 7.94318C27.5717 7.94318 27.4512 7.99308 27.3624 8.08192C27.2735 8.17075 27.2236 8.29124 27.2236 8.41687C27.2236 8.51055 27.2514 8.60213 27.3035 8.68003C27.3555 8.75793 27.4295 8.81864 27.516 8.85449C27.6026 8.89035 27.6978 8.89973 27.7897 8.88145C27.8816 8.86317 27.966 8.81806 28.0323 8.75181C28.0985 8.68557 28.1436 8.60116 28.1619 8.50928C28.1802 8.41739 28.1708 8.32215 28.1349 8.23559C28.0991 8.14904 28.0384 8.07506 27.9605 8.02301ZM7.40888 3.40101C7.39166 3.42697 7.37182 3.45109 7.34967 3.47301C6.96969 3.94032 6.68956 4.48059 6.52662 5.06044C6.36367 5.64029 6.32136 6.24739 6.4023 6.84423C6.59414 9.11224 8.2331 12.8387 14.9078 17.7764C19.8554 14.1163 22.0363 11.1226 22.9131 8.89055H19.171C19.0871 8.89014 19.0048 8.86748 18.9326 8.82487C18.8604 8.78226 18.8007 8.72123 18.7598 8.64802L17.3515 6.18486L14.8742 12.3792C14.839 12.4672 14.7783 12.5426 14.6999 12.5957C14.6214 12.6489 14.5288 12.6772 14.4341 12.6772H14.4133C14.3157 12.6734 14.2216 12.6395 14.144 12.5801C14.0664 12.5207 14.0091 12.4388 13.9798 12.3456L12.3973 7.20328L11.5243 8.66081C11.4822 8.73088 11.4227 8.78886 11.3515 8.82911C11.2804 8.86937 11.2001 8.89054 11.1183 8.89055H7.80251V7.94318H10.8497L12.1329 5.80449C12.1801 5.72605 12.2489 5.66294 12.3311 5.62278C12.4134 5.58263 12.5055 5.56716 12.5963 5.57823C12.6871 5.5893 12.7728 5.62645 12.843 5.68518C12.9132 5.74391 12.9648 5.82171 12.9917 5.90917L14.4924 10.7853L16.8348 4.92343C16.8676 4.84031 16.9234 4.76819 16.9955 4.71541C17.0676 4.66262 17.1532 4.63132 17.2424 4.62513C17.3316 4.61894 17.4207 4.6381 17.4994 4.68041C17.5782 4.72272 17.6433 4.78644 17.6874 4.86422L19.4457 7.94318H23.2219C23.3197 7.57061 23.3846 7.19022 23.4161 6.80633C23.4914 6.21534 23.446 5.61523 23.2826 5.04229C23.1193 4.46935 22.8415 3.93549 22.4659 3.47301C22.4438 3.45109 22.4239 3.42697 22.4067 3.40101C22.0285 2.89723 21.5379 2.48879 20.9739 2.20827C20.4099 1.92774 19.7881 1.78289 19.1582 1.78527C16.9513 1.78527 15.2602 3.45595 15.2432 3.47348C15.1992 3.51752 15.1469 3.55246 15.0894 3.5763C15.0319 3.60014 14.9703 3.61241 14.908 3.61241C14.8458 3.61241 14.7841 3.60014 14.7266 3.5763C14.6691 3.55246 14.6169 3.51752 14.5729 3.47348L14.5725 3.47312C14.5393 3.44067 12.8418 1.78527 10.6574 1.78527C10.0279 1.78528 9.40698 1.93118 8.84334 2.21152C8.27971 2.49185 7.78871 2.899 7.40888 3.40101ZM0.322266 7.94336H4.11175V8.89073H0.322266V7.94336Z" fill="#828282" />
                    </svg>
                </g>
                :<g>

                </g>
                }
            </svg>
        )
    }
}