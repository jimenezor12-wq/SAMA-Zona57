/// ==========================================
// 1. CONFIGURACIÓN Y LLAMADA A GEMINI 2026 (VERSIÓN ESTATAL)
// ==========================================

const p1 = "AIzaSyDD8V4R9M";
const p2 = "Sd8L0KScz0SnlU1H";
const p3 = "4dl9R_mu0";
const API_KEY = p1 + p2 + p3;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";

window.ultimaRespuestaIA = null;

async function llamarIA(pda, problema, grado) {
    const prompt = `Actúa como un Asesor Técnico Pedagógico (ATP), experto en la Nueva Escuela Mexicana (NEM), metodología STEAM y Educación Especial. Tu misión es diseñar un PROYECTO INTERDISCIPLINARIO DE ALTO IMPACTO, extenso y con máximo rigor científico.

    --- BASE DE CONOCIMIENTO TÉCNICA (Uso obligatorio) ---
    1. APOYOS: Actividades que aumentan la capacidad de respuesta a la diversidad (visuales, verbales, físicos, técnicos).
    2. AJUSTES RAZONABLES: Medidas de accesibilidad específicas: Curriculares (al PDA o evaluación), Materiales (atril, material concreto), Actividades (demostraciones, lugar estratégico), Comunicación (pictogramas), Infraestructura y Organización de la jornada.
    3. METODOLOGÍA STEAM: Enfoque interdisciplinario basado en Indagación (fases 1-5), diseño de ingeniería, construcción de modelos y debate.

    --- BASE DE CONOCIMIENTO "MACH 20" (Modelación Real) ---
    PROHIBIDO: Repetición mecánica de algoritmos o solo usar GeoGebra como visualizador.
    OPCIONES DE MODELACIÓN PRIORITARIAS:
    - Datos reales (consumo de agua, basura, ruido, gasto en cooperativa).
    - Simulación y predicción (llenado de cisternas, ahorro de dinero).
    - Diseño y construcción (huertos, rampas, murales geométricos).
    - Argumentación y transformación (defender ideas con evidencia y campañas sociales).

    --- DATOS DE LA MISIÓN ---
    Grado: ${grado}º Secundaria | PDA: "${pda}" | Problemática: "${problema}" (Contexto Chihuahua).

    --- ESTRUCTURA DE RESPUESTA (JSON estricto) ---
    {
      "encuadre": {
        "titulo": "Nombre del Proyecto STEAM",
        "aterrizaje_situado": "Contextualización en Chihuahua. Cómo bajar el PDA al suelo usando la problemática.",
        "pregunta_detonadora": "Reto de pensamiento crítico sin respuesta inmediata."
      },
      "fases_steam": {
        "fase1_introduccion": "Introducción y problemática.",
        "fase2_diseño_indagacion": "Acuerdos de investigación.",
        "fase3_organizacion_respuestas": "Análisis e interpretación de datos.",
        "fase4_presentacion_aplicacion": "Propuesta de acción y presentación.",
        "fase5_metacognicion": "Reflexión sobre el proceso."
      },
      "rescate_inclusion": {
        "tipo_accion": "Definir si es Apoyo o Ajuste Razonable.",
        "estrategia_BAP": "Descripción técnica para eliminar barreras.",
        "justificacion": "Garantía de igualdad de condiciones."
      },
      "mach20_modelacion": {
        "tipo": "Opción elegida de modelación.",
        "proceso_ingenieria": "Diseño, creación y mejora.",
        "herramientas": "Software o materiales manipulativos."
      },
      "interdisciplinariedad": {
        "vinculo_ciencias": "Relación con Ciencias naturales.",
        "vinculo_artes_lenguajes": "Integración estética.",
        "pda_relacionado": "Sugerencia de PDA de Ciencias."
      },
      "secuencia_didactica": {
        "justificacion_tiempo": "Relación PDA vs Sesiones.",
        "sesiones_detalladas": "Planeación Inicio-Desarrollo-Cierre."
      },
      "evaluacion": {
        "producto_final": "Producto que resuelve el problema.",
        "formativa": "Seguimiento y retroalimentación.",
        "indicadores": ["Indicador 1", "Indicador 2", "Indicador 3"],
        "likert_radar": ["Nivel 3", "Nivel 2", "Nivel 1"]
      }
    }`;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-goog-api-key': API_KEY },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let textResponse = data.candidates[0].content.parts[0].text;
            const inicio = textResponse.indexOf('{');
            const fin = textResponse.lastIndexOf('}') + 1;
            window.ultimaRespuestaIA = JSON.parse(textResponse.substring(inicio, fin));
            return window.ultimaRespuestaIA;
        }
    } catch (error) {
        console.error("Error Pedagógico:", error);
        return null;
    }
}

// ==========================================
// 2. LÓGICA DE INTERFAZ (Sincronizada con el JSON)
// ==========================================

function abrirPanelTactico() {
    // 1. Buscamos el selector de contenido
    const selector = document.getElementById('select-contenido');
    
    // 2. Extraemos el texto del contenido seleccionado
    let contenidoTexto = "";
    if (selector && selector.selectedIndex > 0) {
        contenidoTexto = selector.options[selector.selectedIndex].text;
    } else {
        // Si por algo no hay selector, intentamos recuperarlo de la variable global
        contenidoTexto = contenidoSeleccionadoActual;
    }

    // 3. Cambiamos de pantalla
    document.getElementById('main-panel').classList.add('hidden');
    document.getElementById('tactical-screen').classList.remove('hidden');

    // 4. ASIGNACIÓN CRÍTICA (Aquí es donde se llenan los datos de tu captura)
    document.getElementById('display-grade').innerText = currentGrade;
    
    // Esta línea debe coincidir con el id="display-content" que se ve en tu F12
    document.getElementById('display-content').innerText = contenidoTexto;
    
    // Llenamos el PDA (el que ya te salía bien)
    const pdaActual = document.getElementById('pda-display').querySelector('button') ? 
                      document.getElementById('pda-display').querySelector('button').innerText : 
                      "PDA Seleccionado";
    
    document.getElementById('display-pda').innerText = pdaActual;
}

async function contextualizarEstrategias() {
    const problema = document.getElementById('problem-input').value.trim();
    const pdaActual = document.getElementById('display-pda').innerText;
    const loadingScreen = document.getElementById('loading-screen');

    if (!problema) return alert("Por favor, describe la problemática de la escuela.");

    // 1. MOSTRAR PANTALLA DE CARGA (Con display flex para centrar contenido)
    loadingScreen.style.display = 'flex';
    loadingScreen.classList.remove('hidden');
    
    document.getElementById('koro-message').innerText = "Iniciando análisis neuronal pedagógico...";
    
    // 2. LLAMAR A LA IA
    const res = await llamarIA(pdaActual, problema, currentGrade);

    // 3. OCULTAR PANTALLA DE CARGA
    loadingScreen.style.display = 'none';
    loadingScreen.classList.add('hidden');

    if (res) {
        // Llenado de tentáculos
        document.getElementById('ejemplo-aterrizaje').innerHTML = `<strong>${res.encuadre.titulo}</strong><br>${res.encuadre.aterrizaje_situado}`;
        document.getElementById('ejemplo-rescate').innerHTML = `<strong>Tipo:</strong> ${res.rescate_inclusion.tipo_accion}<br><strong>Estrategia:</strong> ${res.rescate_inclusion.estrategia_BAP}`;
        document.getElementById('ejemplo-mach').innerText = res.mach20_modelacion.proceso_ingenieria;

        document.getElementById('tentacles-strategies').classList.remove('hidden');
        
        let navFinal = document.getElementById('navegacion-final');
        if (!navFinal) {
            navFinal = document.createElement('div');
            navFinal.id = "navegacion-final";
            navFinal.style.cssText = "display:flex; gap:15px; margin-top:20px; width:100%;";
            document.querySelector('.planning-container').insertBefore(navFinal, document.querySelector('button[onclick="cerrarTactico()"]'));
        }
        navFinal.innerHTML = `
            <button onclick="irAProyectos()" style="background:#4CAF50; color:white; flex:1; padding:12px; border-radius:10px; border:none; cursor:pointer; font-weight:bold;">🚀 Ver Proyecto Completo</button>
            <button onclick="irARadar()" style="background:#1976d2; color:white; flex:1; padding:12px; border-radius:10px; border:none; cursor:pointer; font-weight:bold;">📡 Ver Radar</button>
        `;
        navFinal.classList.remove('hidden');
        document.getElementById('koro-message').innerText = "¡Estrategias contextualizadas con éxito!";
    } else {
        alert("Hubo un problema al conectar con la IA. Revisa tu conexión.");
    }
}

function irAProyectos() {
    const res = window.ultimaRespuestaIA;
    if (!res) return alert("Primero debes contextualizar con tentáculos.");

    document.getElementById('tactical-screen').classList.add('hidden');
    document.getElementById('project-screen').classList.remove('hidden');
    
    document.getElementById('project-content').innerHTML = `
        <h2 style="color:#2e7d32; border-bottom: 2px solid #2e7d32;">🚀 Proyecto STEAM: ${res.encuadre.titulo}</h2>
        
        <div style="background:#fff3e0; padding:15px; border-radius:10px; margin-bottom:20px; border-left:5px solid #ff9800;">
            <h4 style="margin-top:0;">🟡 Aterrizaje (Contexto Situado)</h4>
            <p>${res.encuadre.aterrizaje_situado}</p>
            <p><strong>🎯 Pregunta Retadora:</strong> ${res.encuadre.pregunta_detonadora}</p>
        </div>

        <div style="background:#f3e5f5; padding:15px; border-radius:10px; margin-bottom:20px; border-left:5px solid #9c27b0;">
            <h4 style="margin-top:0;">🟣 Rescate e Inclusión (Ajustes y Apoyos)</h4>
            <p><strong>Tipo de Medida:</strong> ${res.rescate_inclusion.tipo_accion}</p>
            <p><strong>Estrategia Táctica:</strong> ${res.rescate_inclusion.estrategia_BAP}</p>
            <p style="font-size:0.9rem; font-style:italic;"><strong>Justificación Técnica:</strong> ${res.rescate_inclusion.justificacion}</p>
        </div>

        <div style="background:#ffebee; padding:15px; border-radius:10px; margin-bottom:20px; border-left:5px solid #f44336;">
            <h4 style="margin-top:0;">🔴 Mach 20 (Modelación Real)</h4>
            <p><strong>Enfoque:</strong> ${res.mach20_modelacion.tipo}</p>
            <p><strong>Proceso de Ingeniería:</strong> ${res.mach20_modelacion.proceso_ingenieria}</p>
            <p><strong>Herramientas Sugeridas:</strong> ${res.mach20_modelacion.herramientas}</p>
        </div>

        <hr>

        <h3 style="color:#1565c0;">📖 Fases del Proyecto STEAM (Indagación)</h3>
        <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="border-bottom: 1px solid #ddd; padding-bottom:10px;"><strong>Fase 1. Introducción:</strong> ${res.fases_steam.fase1_introduccion}</div>
            <div style="border-bottom: 1px solid #ddd; padding-bottom:10px;"><strong>Fase 2. Diseño e Investigación:</strong> ${res.fases_steam.fase2_diseño_indagacion}</div>
            <div style="border-bottom: 1px solid #ddd; padding-bottom:10px;"><strong>Fase 3. Organización de Respuestas:</strong> ${res.fases_steam.fase3_organizacion_respuestas}</div>
            <div style="border-bottom: 1px solid #ddd; padding-bottom:10px;"><strong>Fase 4. Presentación y Aplicación:</strong> ${res.fases_steam.fase4_presentacion_aplicacion}</div>
            <div style="border-bottom: 1px solid #ddd; padding-bottom:10px;"><strong>Fase 5. Metacognición:</strong> ${res.fases_steam.fase5_metacognicion}</div>
        </div>

        <hr>

        <h4 style="color:#1976d2;">🧪 Interdisciplinariedad (Campo Formativo)</h4>
        <p><strong>Ciencias:</strong> ${res.interdisciplinariedad.vinculo_ciencias}</p>
        <p><strong>Artes/Lenguajes:</strong> ${res.interdisciplinariedad.vinculo_artes_lenguajes}</p>
        <p><strong>PDA Relacionado:</strong> ${res.interdisciplinariedad.pda_relacionado}</p>

        <hr>

        <h4 style="color:#d32f2f;">🗓️ Secuencia Didáctica Detallada</h4>
        <p><em>Justificación: ${res.secuencia_didactica.justificacion_tiempo}</em></p>
        <div style="background:#f9f9f9; padding:15px; border-radius:10px; white-space: pre-wrap; border:1px solid #ccc;">${res.secuencia_didactica.sesiones_detalladas}</div>

        <hr>

        <h4 style="color:#388e3c;">📊 Evaluación Formativa y Producto</h4>
        <p><strong>Producto Final:</strong> ${res.evaluacion.producto_final}</p>
        <p><strong>Impacto:</strong> ${res.evaluacion.formativa}</p>
    `;
}
// Función para generar sugerencia de contexto si el campo está vacío
async function generarSugerenciaContexto() {
    const pdaActual = document.getElementById('display-pda').innerText;
    const msg = `Actúa como ATP. Para el PDA: "${pdaActual}", sugiere 3 problemáticas reales y situadas en Chihuahua para un proyecto STEAM. Sé breve.`;
    
    document.getElementById('koro-message').innerText = "Buscando inspiración en el desierto de Chihuahua...";
    
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-goog-api-key': API_KEY },
        body: JSON.stringify({ contents: [{ parts: [{ text: res }] }] })
    });
    // Nota: Esta es una llamada rápida. Para simplificar el taller, puedes tener 3 fijas por grado si prefieres.
}
function irARadar() {
    const res = window.ultimaRespuestaIA;
    if (!res) return;

    document.getElementById('tactical-screen').classList.add('hidden');
    document.getElementById('radar-screen').classList.remove('hidden');
    
    // Iconos dinámicos según nivel
    const niveles = [
        { n: "Nivel 3 (Mach 20) 🚀", color: "#2e7d32" },
        { n: "Nivel 2 (En Proceso) ⛓️", color: "#f9a825" },
        { n: "Nivel 1 (Rescate) 🆘", color: "#d32f2f" }
    ];

    let indHTML = res.evaluacion.indicadores.map(i => `
        <li style="margin-bottom:10px; padding-left:5px; border-left:3px solid #1565c0;">${i}</li>
    `).join('');
    
    let likHTML = res.evaluacion.likert_radar.map((l, index) => `
        <div style="background:white; padding:10px; margin-bottom:5px; border-radius:5px; border:1px solid #ddd;">
            <strong style="color:${niveles[index].color}">${niveles[index].n}:</strong> ${l}
        </div>
    `).join('');

    document.getElementById('rubrica-content').innerHTML = `
        <div class="radar-header">
            <h3>📡 Radar de Evaluación Formativa: Operación Zona 57</h3>
            <p>PDA: ${document.getElementById('display-pda').innerText}</p>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-top:20px;">
            <div class="radar-card blue">
                <strong>🔍 Indicadores de Desempeño (Procesuales):</strong>
                <ul style="margin-top:15px; list-style:none; padding:0;">${indHTML}</ul>
            </div>
            <div class="radar-card green">
                <strong>⚖️ Escala de Valoración:</strong>
                <div style="margin-top:15px;">${likHTML}</div>
            </div>
        </div>
        <div class="radar-footer">
            <strong>📌 Criterio de Modelación:</strong> ${res.mach20_modelacion.proceso_ingenieria}
            <br><small>Herramientas: ${res.mach20_modelacion.herramientas}</small>
        </div>
    `;
}

function regresarATactico(p) { document.getElementById(p).classList.add('hidden'); document.getElementById('tactical-screen').classList.remove('hidden'); }
function cerrarTactico() { document.getElementById('tactical-screen').classList.add('hidden'); document.getElementById('main-panel').classList.remove('hidden'); }
