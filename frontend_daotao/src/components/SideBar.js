import "../css/components/SideBar.css" ; 

function SideBar() {
    return(
        <div class="sidebar ">
            <div class="logo-details">
            <i class="bx bxl-c-plus-plus"></i>
            <span class="logo_name">CodingLab</span>
            </div>
            <ul class="nav-links">
            <li>
                <a href="#" class="active">
                <i class="bx bx-grid-alt"></i>
                <span class="links_name">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="bx bx-box"></i>
                <span class="links_name">Product</span>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="bx bx-list-ul"></i>
                <span class="links_name">Order list</span>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="bx bx-pie-chart-alt-2"></i>
                <span class="links_name">Analytics</span>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="bx bx-coin-stack"></i>
                <span class="links_name">Stock</span>
                </a>
            </li>
    
            </ul>
      </div>
    )

}

export default SideBar ; 
