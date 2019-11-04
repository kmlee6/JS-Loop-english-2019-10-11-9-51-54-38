console.log(
Array.from(new Array(9), (_, i)=>i+1)
.map(j => {return Array.from(new Array(j), (_, k)=>k+1)
.map(x => {return `${j}*${x}=${j*x}`})
.join(" ")
}).join("\n")
)