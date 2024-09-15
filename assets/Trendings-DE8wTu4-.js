import{o as l,c as d,b as e,e as t,t as S,d as C,a as b,r as w,n as _,i as u,A as v,j as T}from"./index-B3ElrWOa.js";const D={class:"coinCell"},k={class:"flex items-center w-20"},W=["src","alt"],$={__name:"TrendingCoinRenderer",props:["params"],setup(n){const{params:r}=n,a=r.data;return(s,c)=>(l(),d("div",D,[e("div",k,[e("img",{src:t(a).small,alt:t(a).name,class:"w-8 h-8 rounded-full mr-2"},null,8,W),e("span",null,S(t(a).name),1)])]))}},z={class:"coinCell"},F={class:"flex items-center w-20"},P=["src","alt"],R={__name:"TrendingNftsRenderer",props:["params"],setup(n){const{params:r}=n,a=r.data;return(s,c)=>(l(),d("div",z,[e("div",F,[e("img",{src:t(a).thumb,alt:t(a).name,class:"w-8 h-8 rounded-full mr-2"},null,8,P),e("span",null,S(t(a).name),1)])]))}},O=C("trendings",{state:()=>({categories:[],coins:[],nfts:[]}),actions:{async loadTrendings(){try{const n=await b.get("https://api.coingecko.com/api/v3/search/trending");this.categories=n.data.categories,this.coins=n.data.coins,this.nfts=n.data.nfts}catch(n){console.error("Error fetching coin data:",n)}}}}),I={class:"flex w-[85%]"},A={class:"w-64 h-90 min-h-[50vh] bg-gray-100 p-4"},E={class:"mb-2"},G={class:"mb-2"},V={class:"mb-2"},H={class:"flex-1 px-8"},M={key:0,class:"bg-gray-100 p-4 shadow-md rounded-md"},q={key:1,class:"bg-gray-100 p-4 shadow-md rounded-md"},B={key:2,class:"bg-gray-100 p-4 shadow-md rounded-md"},j={__name:"TrendingsGrid",setup(n){const r=O(),a={COINS:1,NFTS:2,CATEGORIES:3},s=w(a.COINS),c=o=>{const i=new Intl.NumberFormat("en-US",{style:"decimal",maximumFractionDigits:2});return o.value==null?"":i.format(o.value)},g=o=>`<img style="height: 100%; width: 100%" src=${o.value} />`,y=[{headerName:"Name",field:"coin",cellRenderer:$,minWidth:200,maxWidth:350},{headerName:"Slug",field:"slug"},{headerName:"Market Cap Rank",field:"market_cap_rank"},{headerName:"Total Volume",field:"data.total_volume",maxWidth:180},{headerName:"Sparkline",field:"data.sparkline",cellRenderer:g}],x=[{headerName:"NFT",field:"nft",cellRenderer:R,minWidth:250,maxWidth:300},{headerName:"Floor Price",field:"data.floor_price",maxWidth:220},{headerName:"H24 Floor Price Change % ",field:"floor_price_24h_percentage_change",valueFormatter:c,cellDataType:"number",maxWidth:220},{headerName:"H24 Average Sale Price",field:"data.h24_average_sale_price",maxWidth:220},{headerName:"Sparkline",field:"data.sparkline",cellRenderer:g}],N=[{headerName:"Name",field:"name",minWidth:300,maxWidth:350},{headerName:"Coins Count",field:"coins_count",minWidth:200,maxWidth:250},{headerName:"Total Volume",field:"data.total_volume",valueFormatter:c,cellDataType:"number",type:"rightAligned",minWidth:250,maxWidth:300},{headerName:"Sparkline",field:"data.sparkline",cellRenderer:g}],h={defaultColDef:{sortable:!0,filter:!1},rowSelection:"single"},p={type:"fitGridWidth"};function f(o){s.value=s.value===o?null:o}return r.loadTrendings(),(o,i)=>(l(),d("div",I,[e("div",A,[e("nav",null,[e("ul",null,[e("li",E,[e("button",{onClick:i[0]||(i[0]=m=>f(a.COINS)),class:_(["w-full text-left px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition",{"bg-gray-300":s.value===a.COINS}])}," Coins ",2)]),e("li",G,[e("button",{onClick:i[1]||(i[1]=m=>f(a.NFTS)),class:_(["w-full text-left px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition",{"bg-gray-300":s.value===a.NFTS}])}," Nfts ",2)]),e("li",V,[e("button",{onClick:i[2]||(i[2]=m=>f(a.CATEGORIES)),class:_(["w-full text-left px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition",{"bg-gray-300":s.value===a.CATEGORIES}])}," Categories ",2)])])])]),e("div",H,[s.value===1?(l(),d("div",M,[u(t(v),{class:"ag-theme-quartz",style:{height:"500px"},columnDefs:y,rowData:t(r).coins.map(m=>m.item),gridOptions:h,suppressMenuHide:!1,allowDragFromColumnsToolPanel:"",autoSizeStrategy:p,pagination:!0,paginationPageSizeSelector:[10,25,50,100],paginationPageSize:10},null,8,["rowData"])])):s.value===2?(l(),d("div",q,[u(t(v),{class:"ag-theme-quartz",style:{height:"500px"},columnDefs:x,rowData:t(r).nfts,gridOptions:h,suppressMenuHide:!1,allowDragFromColumnsToolPanel:"",autoSizeStrategy:p,pagination:!0,paginationPageSizeSelector:[10,25,50,100],paginationPageSize:10},null,8,["rowData"])])):s.value===3?(l(),d("div",B,[u(t(v),{class:"ag-theme-quartz",style:{height:"500px"},columnDefs:N,rowData:t(r).categories,gridOptions:h,suppressMenuHide:!1,allowDragFromColumnsToolPanel:"",autoSizeStrategy:p,pagination:!0,paginationPageSizeSelector:[10,25,50,100],paginationPageSize:10},null,8,["rowData"])])):T("",!0)])]))}},U={class:"w-full min-h-[70vh] h-[80%] p-2 m-2 flex justify-center items-center"},J={class:"w-[100%] h-[70%]"},L={__name:"Trendings",setup(n){return(r,a)=>(l(),d("div",U,[e("div",J,[u(j)])]))}};export{L as default};
