pageContent.innerHTML = `
    <!-- HOME BANNER -->
    <div id="home-banner">
        <div id="home-banner-inner">
            <div id="home-banner-content">
                <p class="text-xxl font-extra-bold">CetroTan Investments</p>
                <p class="text-xl">Manufacturing and Distribution of Detergents, Lab and Mining Chemicals and Surgicals</p>
            </div>
        </div>
    </div>

    <!-- HOME MENU -->
    <div id="home-nav-menu">
        <div class="text-xxl font-extra-bold">Products</div>
        <div id="home-nav-menu-items">
            ${productCategories.map(c => {
                return `
                    <a
                        href="${c.href}"
                    >
                        <span class="text-lg">
                            ${c.label}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-base">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                `;
            }).join('')}
        </div>
    </div>
`;
