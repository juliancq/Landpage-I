const $menuButton = document.querySelector("#menubtn");
const $menu = document.querySelector(".navbar");
const $navItems = document.querySelectorAll("#navlink");

$menuButton.addEventListener("click", (e)=>{
	$menu.classList.toggle("active-menu");
})

$navItems.forEach((item)=>{

	item.addEventListener("click", (e)=>{

		$menu.classList.remove("active-menu");
	})
})