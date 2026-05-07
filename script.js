// 1. VARIABLES GLOBALES Y DATOS
let currentGrade = 0;

const pdaPrimerGrado = [
    {
        contenido: "Expresión de fracciones como decimales y de decimales como fracciones",
        pda: ["Usa diversas estrategias al convertir números fraccionarios a decimales y viceversa [cite: 2]"]
    },
    {
        contenido: "Extensión de los números a positivos y negativos y su orden",
        pda: [
            "(1) Reconoce la necesidad de los números negativos a partir de usar cantidades que tienen al cero como referencia. [cite: 2]",
            "(2) Compara y ordena números con signo (enteros, fracciones y decimales) en la recta numérica y analiza en qué casos se cumple la propiedad de densidad. [cite: 2]"
        ]
    },
    {
        contenido: "Extensión del significado de las operaciones y sus relaciones inversas",
        pda: [
            "(1) Reconoce el significado de las cuatro operaciones básicas y sus relaciones inversas al resolver problemas que impliquen el uso de números con signo. [cite: 2]",
            "(2) Comprueba y argumenta si cada una de estas operaciones cumple las propiedades: conmutativa, asociativa y distributiva. [cite: 2]",
            "(3) Identifica y aplica la jerarquía de operaciones y símbolos de agrupación al realizar cálculos. [cite: 2]"
        ]
    },
    {
        contenido: "Regularidades y Patrones",
        pda: ["Representa algebraicamente una sucesión con progresión aritmética de figuras y números [cite: 5]"]
    },
    {
        contenido: "Introducción al álgebra",
        pda: [
            "(1) Interpreta y plantea diversas situaciones del lenguaje común al lenguaje algebraico y viceversa. [cite: 5]",
            "(2) Representa algebraicamente perímetros de figuras [cite: 5]"
        ]
    },
    {
        contenido: "Ecuaciones lineales y cuadráticas",
        pda: [
            "(1) Resuelve ecuaciones de la forma Ax=B, Ax+B=C, Ax+B=Cx+D con el uso de las propiedades de la igualdad. [cite: 5]",
            "(2) Modela y resuelve problemas cuyo planteamiento es una ecuación lineal. [cite: 5]",
            "(3) Resuelve problemas de porcentajes en diversas situaciones. [cite: 5]"
        ]
    },
    {
        contenido: "Funciones",
        pda: [
            "(1) Relaciona e interpreta relaciones proporcional y no proporcional a partir de su representación tabular, gráfica y con diagramas. [cite: 5]",
            "(2) Modela y resuelve diversas situaciones a través de ecuaciones proporcionales con constante positiva y negativa. [cite: 5]"
        ]
    },
    {
        contenido: "Rectas y ángulos",
        pda: [
            "(1) Explora las figuras básicas como rectas y ángulos y su notación. [cite: 7]",
            "(2) Encuentra y calcula los ángulos que se forman al intersecar dos segmentos [cite: 7]"
        ]
    },
    {
        contenido: "Construcción y propiedades de las figuras planas y cuerpos",
        pda: [
            "(1) Utiliza la regla y el compás para trazar: punto medio, mediatriz de un segmento, segmentos y ángulos congruentes, bisectriz de un ángulo, rectas perpendiculares, rectas paralelas. [cite: 7]",
            "(2) Identifica y trazar las rectas notables en triángulos y cuadriláteros. [cite: 7]",
            "(3) Construye y clasifica triángulos y cuadriláteros a partir del análisis de distinta información. [cite: 7]"
        ]
    },
    {
        contenido: "Circunferencia, círculo y esfera",
        pda: [
            "(1) Identifica y traza las rectas notables en la circunferencia y las relaciones entre ellas. [cite: 7]",
            "(2) Investiga figuras relacionadas con círculos y propiedades de los círculos. [cite: 7]",
            "(3) Construye circunferencias a partir de distinta información. [cite: 7]",
            "(4) Verifica los criterios de existencia y unicidad de estas figuras. [cite: 10]"
        ]
    },
    {
        contenido: "Medición y cálculo en diferentes contextos",
        pda: [
            "(1) Introduce la idea de distancia entre dos puntos como la longitud del segmento que los une. [cite: 10]",
            "(2) Encuentra la distancia de un punto a una recta y la distancia entre dos rectas paralelas. [cite: 10]",
            "(3) Explora la desigualdad del triángulo. [cite: 10]",
            "(4) Obtiene y aplica fórmulas o usa otras estrategias para calcular el perímetro y el área de polígonos regulares e irregulares y del círculo. [cite: 10]"
        ]
    },
    {
        contenido: "Obtención y representación de información",
        pda: ["Usa tablas, gráficas de barras y circulares para el análisis de información. [cite: 10]"]
    },
    {
        contenido: "Interpretación de la información a través de medidas de tendencia central y de dispersión",
        pda: [
            "(1) Determina e interpreta la frecuencia absoluta, la frecuencia relativa, la media, la mediana y la moda en un conjunto de datos. [cite: 10]",
            "(2) Usa e interpreta las medidas de tendencia central (moda, media aritmética y mediana) y el rango de un conjunto de datos, y justifica con base en ellas sus decisiones. [cite: 10]"
        ]
    },
    {
        contenido: "Azar y probabilidad",
        pda: [
            "(1) Compara dos o más eventos a partir de sus resultados posibles, usa relaciones como: 'es más probable que…', 'es menos probable que…'. [cite: 12]",
            "(2) Identifica eventos en los que interviene el azar, determina el espacio muestral y experimenta. [cite: 12]",
            "(3) Identifica diversos procedimientos de conteo y resuelve problemas. [cite: 12]"
        ]
    }
    
];
const pdaSegundoGrado = [
    {
        contenido: "Extensión del significado de las operaciones y sus relaciones inversas",
        pda: [
            "(1) Usa criterios de divisibilidad y números primos al resolver problemas que implican calcular el máximo común divisor y mínimo común múltiplo. [cite: 2]",
            "(2) Calcula potencias con exponente entero y la raíz cuadrada. [cite: 2]",
            "(3) Usa la notación científica al realizar cálculos con cantidades muy grandes o muy pequeñas. [cite: 2]"
        ]
    },
    {
        contenido: "Regularidades y Patrones",
        pda: ["Representa algebraicamente una sucesión con progresión cuadrática de figuras y números. "]
    },
    {
        contenido: "Introducción al álgebra",
        pda: [
            "(1) Representa algebraicamente áreas que generan una expresión cuadrática. ",
            "(2) Identifica y usa las propiedades de los exponentes al resolver distintas operaciones algebraicas. "
        ]
    },
    {
        contenido: "Ecuaciones lineales y cuadráticas",
        pda: [
            "(1) Resuelve desigualdades con expresiones algebraicas. ",
            "(2) Modela y soluciona sistemas de dos ecuaciones lineales con dos incógnitas por algún método para dar respuesta a un problema. "
        ]
    },
    {
        contenido: "Funciones",
        pda: ["Relaciona e interpreta la proporcionalidad inversa de dos magnitudes o cantidades, además usa una tabla, gráfica o representación algebraica en diversos contextos. "]
    },
    {
        contenido: "Rectas y ángulos",
        pda: ["Identifica y usa las relaciones entre los ángulos, lados y diagonales para construir a escala triángulos, cuadriláteros y polígonos regulares o irregulares. [cite: 7]"]
    },
    {
        contenido: "Construcción y propiedades de las figuras planas y cuerpos",
        pda: [
            "(1) Construye con regla y compás polígonos regulares con distinta información. [cite: 7]",
            "(2) Identifica y usa las relaciones entre figuras en la construcción de teselados. [cite: 7]"
        ]
    },
    {
        contenido: "Circunferencia, círculo y esfera",
        pda: [
            "(1) Determina la medida de ángulos inscritos y centrales, así como de arcos de circunferencia. [cite: 7]",
            "(2) Explora las intersecciones entre círculos y figuras al calcular perímetros y áreas. [cite: 7]"
        ]
    },
    {
        contenido: "Medición y cálculo en diferentes contextos",
        pda: [
            "(1) Resuelve problemas que implican conversiones en múltiplos y submúltiplos del metro, litro, kilogramo y de unidades del sistema inglés (yarda, pulgada, galón, onza y libra). [cite: 10]",
            "(2) Utiliza estrategias diversas para determinar el perímetro y el área de figuras compuestas. [cite: 10]"
        ]
    },
    {
        contenido: "Obtención y representación de información",
        pda: ["Recolecta, registra, lee y comunica información mediante histogramas, gráficas poligonales y de línea. [cite: 10]"]
    },
    {
        contenido: "Interpretación de la información a través de medidas de tendencia central y de dispersión",
        pda: [
            "(1) Usa e interpreta las medidas de tendencia central (moda, media aritmética y mediana) y de dispersión (rango y la desviación media) de un conjunto de datos, y justifica con base en ellas sus decisiones. [cite: 10]",
            "(2) Identifica tendencias en los datos centrándose en sus valores representativos y sus variaciones. "
        ]
    },
    {
        contenido: "Azar y probabilidad",
        pda: [
            "(1) Realiza experimentos aleatorios y registra los resultados en una tabla de frecuencia como la transición de la probabilidad frecuencial a la clásica. ",
            "(2) Analiza las características de la medición de probabilidad y su equivalencia y representación en números decimales, fraccionarios y porcentajes. "
        ]
    }
];
const pdaTercerGrado = [
    {
        contenido: "Introducción al álgebra",
        pda: ["Representa algebraicamente áreas y volúmenes de cuerpos geométricos y calcula el valor de una variable en función de las otras."]
    },
    {
        contenido: "Ecuaciones lineales y cuadráticas",
        pda: [
            "(1) Resuelve ecuaciones de la forma Ax2+Bx+C=0 por factorización y fórmula general.",
            "(2) Resuelve problemas cuyo planteamiento es una ecuación cuadrática."
        ]
    },
    {
        contenido: "Funciones",
        pda: [
            "(1) Relaciona e interpreta la variación de dos cantidades a partir de su representación tabular, gráfica y algebraica.",
            "(2) Explora diversos procedimientos para resolver problemas de reparto proporcional."
        ]
    },
    {
        contenido: "Construcción y propiedades de las figuras planas y cuerpos",
        pda: [
            "(1) Aplica las propiedades de la congruencia y semejanza de triángulos al construir y resolver problemas.",
            "(2) Reconoce las propiedades de los sólidos.",
            "(3) Explora la generación de sólidos de revolución a partir de figuras planas.",
            "(4) Explora y construye desarrollos planos de diferentes figuras tridimensionales, cilindros, pirámides y conos."
        ]
    },
    {
        contenido: "Circunferencia, círculo y esfera",
        pda: [
            "(1) Explora y construye desarrollos planos de esferas.",
            "(2) Indaga la generación de esferas a partir de figuras planas.",
            "(3) Encuentra relaciones de volumen de la esfera el cono y el cilindro."
        ]
    },
    {
        contenido: "Medición y cálculo en diferentes contextos",
        pda: [
            "(1) Usa diferentes estrategias para calcular el volumen de primas, pirámides y cilindros.",
            "(2) Formula, justifica y usa el teorema de Pitágoras al resolver problemas.",
            "(3) Resuelve problemas utilizando las razones trigonométricas seno, coseno y tangente."
        ]
    },
    {
        contenido: "Obtención y representación de información",
        pda: ["Lee, interpreta y comunica información de cualquier tipo de gráficas."]
    },
    {
        contenido: "Interpretación de la información a través de medidas de tendencia central y de dispersión",
        pda: ["Determina y compara las medidas de tendencia central (media, mediana y moda) y de dispersión (rango y desviación media) de dos conjuntos de datos para tomar decisiones."]
    },
    {
        contenido: "Azar y probabilidad",
        pda: [
            "(1) Resuelve problemas donde se analicen las características de eventos complementarios y eventos mutuamente excluyentes e independientes.",
            "(2) Resuelve problemas donde se calcule la probabilidad de ocurrencia de dos eventos mutuamente excluyentes y de eventos complementarios (regla de la suma).",
            "(3) Resuelve problemas donde se calcule la probabilidad de ocurrencia de dos eventos independientes (regla del producto).",
            "(4) Indaga las condiciones necesarias para que un juego de azar sea justo, con base en la noción de resultados equiprobables y no equiprobables."
        ]
    }
];
//// ==========================================
// 2. FUNCIONES DE NAVEGACIÓN Y CONTROL
// ==========================================

// Variable global para no perder el nombre del contenido seleccionado
let contenidoSeleccionadoActual = "";

function showModules() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-panel').classList.remove('hidden');
}

/**
 * Configura el grado seleccionado y prepara el mensaje de Koro.
 */
function setGrade(grade) {
    currentGrade = grade;
    document.getElementById('module-cards').classList.remove('hidden');
    const koroMsg = document.getElementById('koro-message');
    
    koroMsg.innerText = `¡Iniciando entrenamiento de ${grade}º Grado!`;
    
    let baseDatos = (grade === 1) ? pdaPrimerGrado : (grade === 2) ? pdaSegundoGrado : pdaTercerGrado;

    document.getElementById('pda-display').innerHTML = `
        <p style="font-size: 0.9rem; color: #666;">Elige el contenido programático:</p>
        <select id="select-contenido" onchange="mostrarPDA(this.value)" style="width:100%; padding:12px; border-radius:10px; border: 2px solid #FF9800; font-size: 1rem;">
            <option value="">-- Selecciona un Contenido --</option>
            ${baseDatos.map((c, index) => `<option value="${index}">${c.contenido}</option>`).join('')}
        </select>
    `;
}

/**
 * Muestra el contenido elegido, los botones de PDA y prepara la transición.
 */
function mostrarPDA(index) {
    if(index === "") return;
    
    let baseActual = (currentGrade === 1) ? pdaPrimerGrado : (currentGrade === 2) ? pdaSegundoGrado : pdaTercerGrado;
    const item = baseActual[index];
    
    // GUARDAMOS EL CONTENIDO AQUÍ PARA QUE NO SALGA VACÍO DESPUÉS
    contenidoSeleccionadoActual = item.contenido;
    
    let botonesHTML = "";
    item.pda.forEach((texto) => {
        const textoLimpio = texto.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
        botonesHTML += `
            <button class="pda-btn-small" onclick="analizarIndividual('${textoLimpio}')" 
                    style="width:100%; background-color:#ffffff; color:#333; border:1px solid #ccc; 
                           margin-bottom:10px; padding:12px; text-align:left; font-size:0.85rem; 
                           border-radius:10px; cursor:pointer; display:block; line-height:1.2;
                           transition: 0.2s; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">
                ${texto}
            </button>
        `;
    });

    document.getElementById('pda-display').innerHTML = `
        <div style="text-align:left; margin-top:10px;">
            <p><strong>Contenido:</strong> ${item.contenido}</p>
            <hr style="border:0; border-top:1px solid #eee; margin-bottom:15px;">
            <div id="lista-botones-pda" style="max-height: 250px; overflow-y: auto;">
                ${botonesHTML}
            </div>
            
            <button onclick="abrirPanelTactico()" style="background-color:#FF9800; color:white; width:100%; font-weight:bold; margin-top:15px; border:none; padding:15px; border-radius:10px; cursor:pointer; font-size: 1rem; box-shadow: 0 4px 0 #e68a00;">
                🚀 Planificar con Problemática (Contexto)
            </button>

            <button onclick="setGrade(currentGrade)" style="width:100%; margin-top:10px; font-size:0.75rem; border:none; background:none; text-decoration:underline; cursor:pointer; color:#666;">
                ↩ Cambiar Contenido
            </button>
        </div>
    `;
    document.getElementById('koro-message').innerText = "¡Elige un PDA para analizarlo pedagógicamente!";
}

// ==========================================
// 3. FUNCIONES DE INTELIGENCIA Y BLOOM
// ==========================================

/**
 * Evalúa niveles de Bloom, sugiere sesiones y cambia la cara de Koro.
 */
function analizarIndividual(textoPDA) {
    let bloom = "Análisis de Proceso";
    let sesiones = "4 a 6";
    let colorKoro = "koro_normal.png"; // Por defecto: Cara relajada

    if (/(Reconoce|Identifica|Explora|Lee|Compara|Describe|Observa)/i.test(textoPDA)) {
        bloom = "Conocimiento / Comprensión (Nivel 1-2)";
        sesiones = "4 a 5"; 
        colorKoro = "rosa.png";
    } 
    else if (/(Usa|Utiliza|Aplica|Calcula|Traza|Resuelve|Mide)/i.test(textoPDA)) {
        bloom = "Aplicación Técnica (Nivel 3)";
        sesiones = "6 a 8";
        colorKoro = "naranja.png";
    } 
    else if (/(Comprueba|Argumenta|Justifica|Verifica|Interpreta|Analiza|Relaciona)/i.test(textoPDA)) {
        bloom = "Análisis y Evaluación (Nivel 4-5)";
        sesiones = "8 a 10";
        colorKoro = "koro_right.png";
    } 
    else if (/(Modela|Construye|Plantea|Representa|Formula|Diseña|Produce)/i.test(textoPDA)) {
        bloom = "Creación / Modelación (Nivel 6)";
        sesiones = "10 a 12";
        colorKoro = "koro_rayas.png";
    }

    // Actualizamos el mensaje de Koro con el análisis
    document.getElementById('koro-message').innerHTML = `
        <div style="font-size:0.9rem; line-height:1.4;">
            <strong style="color:#d32f2f;">Análisis Pedagógico (NEM):</strong><br>
            El verbo operativo indica un nivel de <em>${bloom}</em>.<br><br>
            <strong style="color:#1976d2;">Sugerencia Mach 20:</strong><br>
            Para un proyecto STEAM integral, estimo <strong>${sesiones} sesiones</strong>. 
            <br><small>(Basado en la complejidad de la fase de indagación y prototipado).</small>
        </div>
    `;
    // 2. CORRECCIÓN CRÍTICA: Inyectamos el análisis Y REAFIRMAMOS EL CONTENIDO
    // Usamos 'contenidoSeleccionadoActual' que definimos en la función anterior
    document.getElementById('koro-message').innerHTML = `
        <div style="font-size:0.9rem; line-height:1.4;">
            <div style="background: #fdf2f2; padding: 8px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid #d32f2f;">
                <strong style="color:#d32f2f; display:block;">Misión (Contenido):</strong>
                <span style="color:#333;">${contenidoSeleccionadoActual}</span>
            </div>
            
            <strong style="color:#d32f2f;">Análisis Pedagógico (NEM):</strong><br>
            El verbo operativo indica un nivel de <em>${bloom}</em>.<br><br>
            <strong style="color:#1976d2;">Sugerencia Mach 20:</strong><br>
            Para un proyecto STEAM integral, estimo <strong>${sesiones} sesiones</strong>. 
            <br><small>(Basado en la complejidad de la fase de indagación y prototipado).</small>
        </div>
    `;
    
    const koroImg = document.querySelector('.full-koro-img');
    if(koroImg) koroImg.src = colorKoro; 
}

function openModule(type) {
    if(type === 'proyectos') { 
        irAProyectos(); 
    } 
    else if(type === 'radar_btn') { 
        irARadar(); 
    } 
    else if(type === 'mision') { 
        document.getElementById('koro-message').innerText = "¡Enfócate en el PDA seleccionado para cumplir la misión!"; 
    }
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}