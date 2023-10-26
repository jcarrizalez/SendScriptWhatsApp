async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Es Épico
Canserbero
Oh (oh), me falta el aire (me falta el aire)
Y el corazón tucum-tucum-tucum
Hoy (hoy), va a correr sangre (va a correr sangre)
Ya sé por dónde se mueve ese bum

Hoy, voy a convertirme en un criminal, ya no creo en nadie
A menos que me convierta en un muerto
Hoy, voy a vengar a mi hermano, como le juré a mi padre
Diente por diente, ojo por ojo, es esto

Una bicha prestada, porque no soy hampa
Pero la rabia que siento no escampa, es tanta que me ahoga
Nunca había huelido droga, pero ahora es necesario
Pa' cumplir con lo que el corazón me implora

Siento que se me sale el tórax, la moto a cien por hora
Pelo por la bicha y le grito: ¿Y ahora? (¿Y ahora?)
Todo pasa muy chola, en ráfagas, descargo a todo' esos malandros
Hasta que ya no escupe la pistola

Y el corazón tucum-tucum, tucum, tucum
Y las balas pacaum-pacaum, pacaum, pacaum
Y el corazón tucum-tucum, tucum, tucum
Y las balas pacaum-pacaum, pacaum, ey

Lloro de la arrechera, mientras en la acera caigo
Escucho a una señora que grita que mataron a Carlos
Solo ahí fue cuando sonreí aliviado, porque Carlos
Fue el bastardo que mató a mi hermano

Todo es confuso, escucho: Wiu, wiu, wiu
No veo bien y siento frío, frío, frío
Un tipo gritando: ¡El mío, el mío, el mío!
Hasta que ya no escuché na' más que un profundo silencio (un profundo silencio)

Varios segundos de calma, mi alma al lado de mi cuerpo (al lado de mi cuerpo)
Me dije: Aún no he ido al más allá
Siento un olor a perfume, veo una luz en un túnel
Un fuego que me consume se empezaba a ver atrás

No dejaré que me abrume el fuego
Seguiré hacia el túnel, pensé
Pero seguir, no pude, porque
Me halaron pa'trás, cayendo en picá'

Montañas negras de azufre con un olor a mierda
Cuerpos deformados que sufren, caí sobre una piedra
Un barco viejo con un viejo me esperaban
No me respondían nada, almas el barco golpeaban

Él me llevó donde Cerbero (ah)
Que dijo no morderme porque le gusta mi nombre de rapero, ja
Si lo ves de esa forma, pude tener suerte
Irónica es la vida, pero también irónica es la muerte

Me desperté ya sentado sobre un estrado
Y un jurado de malvados decidiría mi suerte
Recuerdo que fui golpeado y trasladado
A un sitio, en uno de los círculos con un montón de gente

¡Por vengativo y asesino, te quemarás por siempre
Por toda la eternidad, como castigo!
Vi muchos rostros conocidos y me sentí sorprendido
Porque no pensé que estuvieran conmigo

Personas que lucían buenas en el mundo
Como el Ché Guevara, incluso como Juan Pablo II (ajá)
Presuntos Dalai Lamas calcina'os con Mao
Y los difuntos Tafari Makonnen y Beethoven juntos

Me asombró mucho saber que estaban aquí
John F. Kennedy, Lenin, Mahoma y Joseph Smith (Joseph Smith)
César y Napoleón salieron de las llamas
Porque eran la misma persona que ahora es un tal Obama

No entendía nada, pregunté por Cristo
Y noté que se burlaban porque nadie lo había visto
Otros dijeron que fue un truco de su iglesia
Para gobernar al mundo con su majestuosa empresa

Charles Russel y Washington, José de San Martín y Gandhi
Yasir Arafat, Cristóbal Colón
Isabel de Inglaterra transformada en perra desnuda
Supe, incluso, estaban Bolívar y Buda

Son demasiadas dudas, pensamientos vagos
Gente buena en el infierno ¿o es que en algo fueron malos? (Malos)
Por algo están aquí, aunque no lo acepten
Debo hallar ahora una manera de huir de la muerte

Recordé que en la tierra donde había nacido
Existía una leyenda del Diablo con un tal Florentino
Obviamente un cuento, pero inteligente
Para irme de este infierno, infierno literalmente

Vociferé durante meses, que podía con el jefe
Recitando versos entre fuego y heces
Hasta que un día, apareció un viejo con traje
Que me dijo: Pierde y me llevo a tu padre de homenaje

Qué situación tan complicada en la que me encontraba
Pero yo nunca he sido de los que se cagan
Además, había compuesto demasiados versos
Que más la improvisación harían temblar al universo

¡Empieza! (¡Ey!)

¡Antes que nada, te maldigo!
¡Voy a hacer que sufras el peor de todos los castigos!
¿Cómo te atreves a retarme en castellano?
¡Y en este ritmo tan pobre como el suelo donde te has criado!

Con más razón, tú deberías avergonzarte
Perder un combate con un homo sapiens
Además, te explico: Se llama Venezuela donde nació este tipo
Y tú no puedes maldecirme, porque ya yo estoy maldito (¡ey!)

Eres muy peculiar, y mi deber es explicar
Que no puedes ganar porque yo lo sé todo
Domino los idiomas, los modos, la historia
Incluso sé los más recónditos miedos de tu memoria

Debo aclarar que hay un factor clave que olvidas
Los miedos se van en el momento en que pierdes la vida
Se dice que el amor masacra tus insultos
Pero yo te mataré con más odio, para ser justo (¡ey!)

¡A mí tú no me engañas, mediocre adversario!
¿Cómo hablar de odio si tu brazo grita lo contrario?
Tú le has mentido a todos tus seguidores
Con múltiples contradicciones en muchas de tus canciones

No entiendes nada a los humanos
Yo sueño con amor porque sé que, en el fondo, nosotros amamos
Si canto rabia, es para desahogar por dentro
Como cuando Cristo echó a los comerciantes de su templo (¡ey!)

¡De nuevo hablando tú de cosas que no sabes!
Eres un imitador como tu voz, la cual no es tan grave
Lo único grave es que te crean
Pero, aunque la mentira tiene patas, tarde o temprano, cojea

Me has conmovido ahora que te conozco más, Satanás
No comprendes el arte, tampoco la paz
Mi voz es más, es más, esta es mi voz que Dios me dio de don
Para tenaz usarla cual daga en tu corazón (¡ey!)

¿Cómo puedes hablar de Dios si eres ateo?
En tus ojos lo veo, mientras mi candela te consume
Te recuerdo que Dios no existe, y lo que viste en aquel túnel
No fue más que simples ángeles comunes

Dudar y no creer es algo muy distinto
Y si dudo de Dios, es porque no lo he visto
Aun así insisto en recalcarte lo que contigo aprendí
Que reyes habrán muchos, pero siempre tienes que ir a ti (siempre)

Y el corazón tucum, tucum-tucum
Y el corazón tucum-tucum, tucum, tucum
Y el corazón tucum-tucum, tucum, tucum
Y el corazón tucum, tucum, tucum, tucum, tucum (uoh)

#########################

Únetenos
Canserbero
Hoy la historia tiene que ser de unidad y
Yo creo en las cosas que nos unen, ¿no?
No creo en las cosas que nos separan
Y unirse es muy complicado
Pero es una lindísima tarea que tenemos por delante
Fecunda y bella
Porque tenemos que unirnos sin negar nuestra diversidad

Son varios años que, en esto, llevo invertido
Recitar se ha convertido en la manera como vivo
Quizá el motivo o misión por la que he nacido
Fueron mis desgracias causa de lo que me he convertido

Muchos no encuentran sentido a mi entrega
Alegan que el hip-hop no es música y que mis versos tampoco
Me ven hablando solo y dicen que estoy loco
Cada vez que ensayo temas que quizá ayuden a otros

Y es que son muy pocos los que en esta misión te animan
Que analizan tus rimas, y en vez de envidiar, te admiran
Son por esos pocos que seguimos en pie de guerra
Hablando de consciencia en medio del caos que existe en la Tierra

Esto va más allá de ser rapero
De protestar (de protestar) o de querer tener dinero
Esto es algo en el pecho, imposible de describir
El rap no debe ser de gangsters, el rap debe construir

Como los techos de cartón de Alí Primera
Como el orgullo de oír el Alma Llanera
El rap debe ser la manera en la que las siguientes eras
Conozcan cómo pensaban los hermanos de Venezuela

Llevamos verdad en la voz
No me sigas, acompáñanos
No como MC, sino como persona
Abre los ojos y reflexiona, únetenos

Somos de los pocos que aún son poetas
Sacar música real de las tumbas es nuestra meta
No me sigas, acompáñanos
Abre los ojos, reflexiona, únetenos

Tomemos de ejemplo los héroes que son inmortales
Personas que hasta fallecieron por sus ideales
Llevamos verdad en la voz
Abre los ojos, reflexiona, únetenos

Si de tres personas que oigan, dos escuchan, solamente
Y de esas dos, solo una aprende, ya para nosotros es suficiente
No me sigas, acompáñanos
Abre los ojos y reflexiona (si puedes), únetenos

Y aunque no soy la vacuna para el cáncer
Ni el plato de comida pa'l niño en Somalia
Y las desgracias
Sé que no van a cesar solo por lo que yo les cante

Este es mi grano de arena, únetenos
Esta es mi gota de agua, únetenos
Porque, solos, no podemos hacer médanos
Porque, solo, yo no puedo hacer océanos

Este es mi grano de arena, únetenos
Esta es mi gota de agua, únetenos
Porque, solos, no podemos hacer médanos
Porque, solo, yo no puedo hacer océanos

Llevamos verdad en la voz
Llevamos verdad en la voz
Llevamos verdad en la voz
Llevamos verdad en la voz

(Llevamos verdad en la voz)

#########################

¿Aceptas?
Canserbero
Hoy tengo ganas de hacer la mejor canción del mundo
Que sea traducida a la entienda de todo el mundo
Quiero que por segundos la gente compruebe
Que el mundo puede cambiar, al luchar por lo que se quiere
Sí, pero al empezar a escribir, me di cuenta
Que ese mejor tema que puedo escribir
Es una respuesta, una respuesta a los que solo hacen protesta
Y no buscan las puertas a los problemas que el planeta enfrenta
Cada vez mis canciones son más aburridas
Para las mentes corrientes, pues anhela una salida
Al problema del mocoso que ayer me pidió dinero
Desde su hogar el cual era un gran cartón en el suelo
Por eso no apruebo, que me vengan súper cantantes
A hablarme de paz, cuando su lucha no es constante
Basta de farsantes ya, sé que sueno como un fanático
Pero esa frase es inspirada por mi odio a lo plástico
Sigo creyendo que el opio es la religión
Y la televisión que adormece mentes en mi nación
No es una solución, dar educación a los pobres
Si les das una pobre educación
Esta es mi canción, tal vez no es la mejor del mundo
Pero es la canción que cree en que podemos vivir juntos
Los blancos, negros, amarillos o rojos
Y el color de piel no importe más que el color de tus ojos
Hay mucha gente que no entiende que el gobierno
No es el único que debe cambiar pa frena este infierno
Aquí hace falta leer y usar los cuadernos
Y reconocer que la juventud no es un don eterno, ¡no!
Recuerdo que de niño quise un telescopio
Y ver con ojos propios, los planetas que nos rodean
Quizás para cambiar lo que por mí vendrán
Y ya veía que eran policías, drogas, peleas
Hoy sueño con un mundo infestado de ideas
Ideas que cambien la pobreza que nos apedrea
Hoy quiero un telescopio donde se vea el futuro
Y que en este haya paz y un mundo seguro

Hoy tengo ganas de hacer la mejor canción del mundo
Que sea traducida a la entienda de todo el mundo
Quiero que por segundos la gente compruebe
Que el mundo puede cambiar, al luchar por lo que se quiere
Y es que, que nos ayuden los angelitos lo dudo
Que nos ayuden estos gobiernos lo dudo
Por eso les propongo cambiar el futuro
Nosotros pueblo, no hace falta más ninguno
En serio, quisiera raptar varios líderes mundiales
Y mostrarles la vida en nuestros barrios marginales
Que sepan lo que es nacer, sin ser rico de cuna
Estudiar, trabajar, sudar sin tener ayuda ninguna
Ser robado por un hombre armado en un autobús
Para que al menos por un día sientan el peso de nuestra cruz
Rogar a Jesús, pa' conseguir cualquier empleo
Aunque este sea totalmente contrario a tus deseos
Me concentro y veo que una guerra esta germinando
Pueblos asesinados, y surgiendo otro asesino al mando
El llanto reina y el mañana es rojo
Y me preocupo al pensar que verán mis hijos al abrir los ojos

Que nos ayuden los angelitos lo dudo
Que nos ayuden estos gobiernos lo dudo
Por eso les propongo cambiar el futuro
Si, nosotros pueblos, no hace falta más ninguno
Con estudio, con trabajo, con respeto, con amor
Yo, les propongo cambiar el futuro
Si aceptas levanta el puño y grita lo juro
(Lo juro)
Más duro
(¡Lo juro!)

Que nos ayuden los angelitos lo dudo
Que nos ayuden estos gobiernos lo dudo
Por eso les propongo cambiar el futuro
Nosotros pueblos, no hace falta más ninguno
Con estudio, con trabajo, con respeto, con amor
Yo, les propongo cambiar el futuro
Si aceptas levanta el puño y grita lo juro
(Lo juro)
Más duro
(¡Lo juro!)
Si, si, si, ¡sí!

Despierta
Hermano latino despierta
Canserbero
Nunca habrá revolución sin evolución de conciencia

#########################

vistas
17.367
Mundo de Piedra
Canserbero
(Your heart is made of stone)
(My heart is made of stone)
(We all living in a stone world)

(My heart is made of stone)
(Your heart is made of stone)
(We all living in a stone world)

Es tres de abril a las dos de la mañana
Carlos debe patrullar de noche toda la semana
Tiene un hijo que ama y una esposa que finge quererla
Los dos viven en un mundo de piedra

Se viste y se va en su patrulla policíaca
A lucir su placa y matracar a todo el que pasa
Una hora pasa y consigue, junta una paca
Que seguramente gastará con putas en las tasca

Se hacen las tres y cuarto, Carlos acelera el paso
Pasa por una esquina y escucha un muchacho gritando
Lo estaban asaltando, el solo echa un corto vistazo
Sin embargo no hizo caso y siguió manejando

Rumbo al burdel de siempre se dirigía
Y mientras conducía, nota que un taxi de cerca lo seguía
Han de ser vainas mías — dijo mientras sonreía
Y al llegar pagó por la mejor prostituta que había

Una rubia de infarto, la mete para el cuarto
Entre sus piernas prueba el tacto y comienza el acto
Pero en menos de un minuto escucha unos pasos entrar y
Murió Carlos ipso-facto

(Your heart is made of stone)
(My heart is made of stone)
(We all living in a stone world)

(My heart is made of stone)
(Your heart is made of stone)
(We all living in a stone world)

Es tres de abril, quince para las dos de la mañana
Es la noche de la esposa de Carlos, al que le prepara
Algo de comer y deja su ropa planchada
Media hora después el se va luego de un beso sin ganas

Comienza el drama, los celos, la paranoia, casi
Siga despacio a esa patrulla, ella dijo al taxi
Una hora estuvieron buscándolo con sigilo
Luego siguiéndolo con dirección hacia un prostíbulo

Acto seguido, suena su teléfono
Era su hijo al que le dijo ahora no puedo, y le colgó
No pudo hablar por ira de saber lo que vería
Llego, entró y peguntó por Carlos el policía

Pagó lo que tenía por la llave que abriría el cerrojo
Además dijo se uniría en orgía con su esposo
Abrió, y de inmediato, ciega por el enojo
Del bolso sacó un arma y, a Carlos entre sus ojos

(Your heart is made of stone)
(My heart is made of stone)
(We all living in a stone world)

(My heart is made of stone)
(Your heart is made of stone)
(We all living in a stone world)

Es tres de abril dos treinta de la mañana
Hora en que comienza la noche del hijo que en su almohada
Esconde la marihuana que fuma siempre
Se despierta y se da cuenta de que en su casa no hay gente

Así que llama al que le vende y cuadra un trueque
A las tres y cuarto en la esquina han de verse para abastecerse
El joven llega puntualmente y de repente
Siente un cañón en su frente del jíbaro que trampa le tiende

Le dice dame la cartera, el reloj y las prendas
Cuando ve que pasa una patrulla en plena contienda
Era el padre del joven que sigue de largo
Mientras jíbaro le suelta disparos al pecho y a la pierna

Solamente el teléfono logra esconder
Y llama a su madre para que lo vaya a socorrer
Pero al atender fue lo último que escuchó
La voz de ella diciendo (¡no puedo!), y le colgó

(Your heart is made of stone)
(My heart is made of stone)
(We all living in a stone world)

(My heart is made of stone)
(Your heart is made of stone)
(We all living in a stone world)

Un funcionario de la Policía Nacional
Identificado como Carlos Camacaro, de 46 años de edad
Fue asesinado por su esposa
La ciudadana María Hernández de Camacaro
En un reconocido local nocturno de la ciudad de Caracas
La mujer, de 43 años de edad
Se encuentra a la orden de la Fiscalía

En otras noticias, un joven de 17 años
Fue hallado sin vida esta madrugada en la Parroquia de Antimano
El joven fue encontrado sin sus pertenencias
Sin embargo las autoridades no descartan el ajuste de cuentas

Continuando con las informaciones
El país se hunde en la mierda
Mientras las autoridades no hacen nada al respecto
Y la sociedad se pierde en una increíble decadencia de valores


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
