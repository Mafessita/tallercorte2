
document.addEventListener("DOMContentLoaded", function () {
    
    function tablaJS() {
        var tablaJS = document.getElementById("tablaJS");

        for (var i = 0; i < 4; i++) {
            var fila = tablaJS.insertRow(i);
            
            for (var j = 0; j < 4; j++) {
                var celda = fila.insertCell(j);

                    if (i == 0 && j == 0) {
                        var img = document.createElement("img");
                        img.src = "https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-01/preolimpico-voleibol-femenino.jpg";
                        img.alt = "Imagen";
                        img.style.width = "400px"; 
                        img.style.height = "350px";
                        celda.appendChild(img);
                        celda.rowSpan = 3;
                        celda.style.border = "1px solid black";
                    }

                    if (i == 0 && j == 1) {
                        var img = document.createElement("img");
                        img.src = "https://www.dicaseducacaofisica.info/wp-content/uploads/2021/04/fundamentos-basicos-voleibol-1.webp";
                        img.style.width = "200px"; 
                        img.style.height = "60px";
                        celda.appendChild(img);
                        celda.style.border = "1px solid black";
                        celda.style.backgroundImage = "url('https://www.dicaseducacaofisica.info/wp-content/uploads/2021/04/fundamentos-basicos-voleibol-1.webp')";
                    }

                    if (i == 0 && j == 2) {
                        var h5 = document.createElement("h5");
                        h5.textContent = 'Thursday, October 11, 2001';
                        celda.appendChild(h5);
                        celda.style.border = "1px solid black";
                    }
                    
                    if (i == 0 && j == 3) {
                        var enlace = document.createElement("a");
                        enlace.href = "https://img.freepik.com/fotos-premium/jugadoras-profesionales-voleibol-accion-estadio-3d_654080-1057.jpg";
                        enlace.textContent = "Text only";
                        celda.appendChild(enlace);
                        celda.style.border = "1px solid black";
                        celda.style.textAlign = 'right';  
                    }

                    if (i == 1 && j == 0) {
                        var h1 = document.createElement("h1");
                        h1.textContent = 'Sample Web Page Table Layout';
                        celda.appendChild(h1);
                        celda.colSpan = 2;
                        celda.style.border = "1px solid black";
                    }

                    if (i == 1 && j == 1) {
                        celda.style.border = "1px solid black";
                    }

                    if (i == 2 && j == 0) {
                        var nav = document.createElement("nav");

                        var home = document.createElement("a");
                        home.href = "https://img.freepik.com/fotos-premium/jugadoras-profesionales-voleibol-accion-estadio-3d_654080-1057.jpg";
                        home.textContent = " HOME |";

                        var download = document.createElement("a");
                        download.href = "https://www.lavoz.com.ar/resizer/1ghIKB0AVV3olZPkKl_TglIBe0U=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/XA5KG4IZVRCVPFYKUYIKGOMYCU.jpg";
                        download.textContent = " DOWNLOAD |";

                        var site = document.createElement("a");
                        site.href = "https://www.ole.com.ar/2022/07/08/ueH2qrKXi_340x340__1.jpg";
                        site.textContent = " SITE INDEX |";

                        var search = document.createElement("a");
                        search.href = "https://img.asmedia.epimg.net/resizer/iOB-YSYNtKTMgGSyZvmKpvWs2io=/644x362/filters:focal(2145x1855:2155x1865)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/BQ5CJ7K6AFFQRCBZIQ5FX2IX5Y.jpg";
                        search.textContent = " SEARCH |";

                        var contact = document.createElement("a");
                        contact.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6p_hGt1imyiuNu4nzX7BqTZLcEfklAFvqZr2yudCyZTjfvPM7a0Bh5s1BZYkWFgBllgg&usqp=CAU";
                        contact.textContent = " CONTACT US ";

                        nav.appendChild(home);
                        nav.appendChild(download);
                        nav.appendChild(site);
                        nav.appendChild(search);
                        nav.appendChild(contact);

                        celda.appendChild(nav);
                        celda.colSpan = 3;
                        celda.style.backgroundColor = "yellow";
                        celda.style.border = "1px solid black";
                    }

                    if (i == 3 && j == 0) {
                        var img = document.createElement("img");
                        img.src = "https://www.dicaseducacaofisica.info/wp-content/uploads/2021/04/fundamentos-basicos-voleibol-1.webp";
                        img.alt = "Imagen";
                        celda.appendChild(img);
                        celda.style.border = "1px solid black";
                    }

                    if (i == 3 && j == 1) {
                        celda.innerHTML = 'This is just a corny way of showing you how a table can organize the layout of a web page. Designing a prototype by sketching on a piece of paper is a good place to start. You need to, however, have the skills to transfer that concept to HTML Tables help you organize it';
                        celda.colSpan = 2;
                        celda.style.border = "1px solid black";
                    }

                    if (i == 3 && j == 2) {
                        var img = document.createElement("img");
                        img.src = "https://conceptodefinicion.de/wp-content/uploads/2021/11/voleibol_1.jpg";
                        img.alt = "Imagen";
                        celda.appendChild(img);
                        celda.style.border = "1px solid black";
                    }            
                }
            } 
        
    }

    tablaJS();
});