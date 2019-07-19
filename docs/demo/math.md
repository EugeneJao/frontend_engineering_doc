# 数学公式
> 使用[katex](https://katex.org/)做数学公式库

> 语法

```katex

$ katex语句 $

```

> 映射表

| 键盘符号 | 数学符号 |
| --- | :-: |
| a' | $a'$ |
| a'' | $a''$ |
| \\tilde{a} | $\tilde{a}$|
| \\mathring{g} | $\mathring{g}$ |
| \\widetilde{ac} | $\widetilde{ac}$ |
| \\overgroup{AB} | $\overgroup{AB}$ |
| \\utilde{AB} | $\utilde{AB}$ |
| \\undergroup{AB} | $\undergroup{AB}$ |
| \\acute{a} | $\acute{a}$ |
| \\vec{F} | $\vec{F}$ |
| \\Overrightarrow{AB} | $\Overrightarrow{AB}$ |
| \\bar{y} | $\bar{y}$ |
| \\overleftarrow{AB} | $\overleftarrow{AB}$ |
| \\overrightarrow{AB} | $\overrightarrow{AB}$ |
| \\breve{a} | $\breve{a}$ |
| \\underleftarrow{AB} | $\underleftarrow{AB}$ |
| \\underrightarrow{AB}| $\underrightarrow{AB}$ |
| \\check{a} | $\check{a}$ |
| \\overleftharpoon{ac} | $\overleftharpoon{ac}$ |
| \\overrightharpoon{ac} | $\overrightharpoon{ac}$ |
| \\dot{a}| $\dot{a}$ |
| \\overleftrightarrow{AB}| $\overleftrightarrow{AB}$ |
| \\overbrace{AB} | $\overbrace{AB}$ |
| \\ddot{a}| $\ddot{a}$ |
| \\underleftrightarrow{AB} | $\underleftrightarrow{AB}$ |
| \\underbrace{AB} | $\underbrace{AB}$ |
| \\grave{a} | $\grave{a}$ |
| \\overline{AB} | $\overline{AB}$ |
| \\overlinesegment{AB} | $\overlinesegment{AB}$ |
| \\hat{\theta} | $\hat{\theta}$ |
| \\underline{AB} | $\underline{AB}$ |
| \\underlinesegment{AB} | $\underlinesegment{AB}$ |
| \\widehat{ac} | $\widehat{ac}$ |
| \\widecheck{ac} | $\widecheck{ac}$ |
| \\'{a}| $\'{a}$ |
| \\~{a} | $\~{a}$ |
| \\.{a} | $\.{a}$ |
| \\H{a} | $\H{a}$ |
| \\\`{a} | $\`{a}$ |
| \\={a} | $\={a}$ |
| \\"{a} | $\"{a}$ |
| \\v{a} | $\v{a}$ |
| \\^{a} | $\^{a}$ |
| \\u{a} | $\u{a}$ |
| \\r{a}| $\r{a}$ |
| ( ) | $( )$ |
| \\lparen \\rparen| $\lparen \rparen$ |
| ⌈ ⌉ | $⌈ ⌉$ |
| \\uparrow | $\uparrow$ |
| [ ] | $[ ]$ |
| ⌊ ⌋ | $⌊ ⌋$ |
| \\downarrow | $\downarrow$ | 
| \\\{ \\\}| $\{ \}$ |
| ⎰⎱ | $⎰⎱$ |
| \\updownarrow | $\updownarrow$ |
| ⟨ ⟩ | $⟨ ⟩$ |
| ⟮ ⟯ | $⟮ ⟯$ |
| \Uparrow | $\Uparrow$ |
| \| | $|$ |
| ┌ ┐ | $┌ ┐$ |
| \\Downarrow | $\Downarrow$ |
| \\\| | $\|$ |
| └ ┘ | $└ ┘$ |
| \\Updownarrow | $\Updownarrow$ |
| \\lvert \\rvert | $\lvert \rvert$ |
| \\backslash | $\backslash$ |
| \\lang \\rang | $\lang \rang$ |
| \\lt \\gt| $\lt \gt$ |
| ⟦ ⟧ | $⟦ ⟧$ |
| \\left. | $\left.$ |
| \\left. | $\right.$ |
| \\left(\\LARGE\{AB\}\\right)| $\left(\LARGE{AB}\right)$ |
| ( \\big( \\Big( \\bigg( \\Bigg( | $( \big( \Big( \bigg( \Bigg($ |
| \\begin\{matrix\} a & b \\\\ c & d \\end\{matrix\} | $\begin{matrix} a & b \\ c & d \end{matrix}$ |
| \\begin\{pmatrix\} a & b \\\\ c & d \\end\{pmatrix\} | $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ |
| \\begin\{array\}\{cc\} a & b \\\\ c & d \\end\{array\} | $\begin{array}{cc} a & b \\ c & d \end{array}$ |
| \\begin\{bmatrix\} a & b \\\\ c & d \\end\{bmatrix\} | $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ |
| \\begin\{vmatrix\} a & b \\\\ c & d \\end\{vmatrix\} | $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ |
| \\begin\{Vmatrix\} a & b \\\\ c & d \\end\{Vmatrix\} | $\begin{Vmatrix} a & b \\ c & d \end{Vmatrix}$ |
| \\begin\{Bmatrix\} a & b \\\\ c & d \\end\{Bmatrix\} | $\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}$ |
| \\def\\arraystretch\{1.5\} \\begin\{array\}\{c:c:c\} a & b & c \\\\ \\hline d & e & f \\\\ \\hdashline g & h & i \\end\{array\} | $\def\arraystretch{1.5} \begin{array}{c:c:c} a & b & c \\ \hline d & e & f \\ \hdashline g & h & i \end{array}$ |
| \\begin\{aligned\} a&=b+c \\\\ d+e&=f \\end\{aligned\} | $\begin{aligned} a&=b+c \\ d+e&=f \end{aligned}$ |
| \\begin\{gathered\} a&=b+c \\\\ d+e&=f \\end\{gathered\} | $\begin{gathered} a&=b+c \\ d+e&=f \end{gathered}$ |
| \\begin\{alignedat\}\{2\} 10&x+ &3&y = 2 \\\\ 3&x+&13&y = 4 \\end\{alignedat\} | $\begin{alignedat}{2} 10&x+ &3&y = 2 \\ 3&x+&13&y = 4 \end{alignedat}$ |
| \\x = \\begin\{cases\} a &\\text{if } b \\\\ c &\\text\{if \} d \\end\{cases\} | $\x = \begin{cases}a &\text{if } b \\ c &\text{if } d \end{cases}$ |
| \\Pi | $\Pi$ |
| \\Sigma | $\Sigma$ |
| \\Delta | $\Delta$ |
| \\Lambda | $\Lambda$ |
| \\Psi | $\Psi$ |
| \\Omega | $\Omega$ |
| \\varDelta | $\varDelta$ |
| \\Theta | $\Theta$ |
| \\varTheta | $\varTheta$ |
| \\varSigma| $\varSigma$ |
| \\alpha | $\alpha$ |
| \\beta| $\beta$ |
| \\gamma | $\gamma$ |
| \\delta | $\delta$ |
| \\epsilon| $\epsilon$ |
| \\zeta | $\zeta$ |
| \\eta| $\eta$ |
| \\theta| $\theta$ |
| \\lambda | $\lambda$ |
| \\mu | $\mu$ |
| \\pi | $\pi$ |
| \\rho | $\rho$ |
| \\sigma | $\sigma$ |
| \\tau | $\tau$ |
| \\upsilon | $\upsilon$ |
| \\phi | $\phi$ |
| \\chi | $\chi$ |
| \\psi | $\psi$ |
| \\omega | $\omega$ |
| \\varphi | $\varphi$ |
| \\nabla | $\nabla$ |
| \\boxed\{\\pi=\\frac c d} | $\boxed{\pi=\frac c d}$ |
| \\not = | $\not =$ |
| x+y^\{2x\} | $x+y^{2x}$ |
| x_n | $x_n$ |
| e^x | $e^x$ |
| _u^o | $_u^o$ |
| a \\atop b | $a \atop b$ |
| \\stackrel\{!\}\{=\}| $\stackrel{!}{=}$|
| \{=\}\\mathllap\{/\\,\} | ${=}\mathllap{/\,}$ |
| \\sqrt\{\\smash[b]\{y\}\}| $\sqrt{\smash[b]{y}}$ |
| \\exists| $\exists$ |
| \\nexists | $\nexists$ |
| \\forall | $\forall$ |
| \\in | $\in$ |
| \\notin | $\notin$ |
| \\ni | $\ni$ |
| \\notni | $\notni$ |
| \\mid | $\mid$ |
| \\empty | $\empty$ |
| \\varnothing | $\varnothing$ |
| \\sum| $\sum$ |
| \\prod | $\prod$ |
| \\int | $\int$ |
| \\bigcap | $\bigcap$ |
| + | $+$ |
| - | $-$ |
| / | $/$ |
| * | $*$ |
| \\amalg | $\amalg$ |
| \\And | $\And$ |
| \\bmod | $\bmod$ |
| \\cap | $\cap$ |
| \\x \\mod a | $x \mod a$ |
| \\times | $\times$
| \\sqrt\{x\}| $\sqrt{x}$ |
| \\sqrt[3]\{x\} | $\sqrt[3]{x}$ |
| = | $=$ |
| \\approx | $\approx$ |
| \\approxeq | $\approxeq$ |
| \\circeq | $\circeq$ |
| \\subseteq | $\subseteq$ |
| \\subset | $\subset$ |
| \\subseteqq | $\subseteqq$ |
 \\supseteq | $\supseteq$ |
| \\supset | $\supset$ |
| \\supseteqq | $\supseteqq$ |


更多请查阅[katext官网](https://katex.org/docs/supported.html)

> 示例代码

```katex

$x^{2} + x_{2} = x^{2} + x_{2}$

```

> 示例

$x^{2} + x_{2} = x^{2} + x_{2}$