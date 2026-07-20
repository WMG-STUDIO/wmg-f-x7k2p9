// ===== Contenu de l'aventure WMG =====
const FORMATION = {
  mascot: { name:"Nono", emoji:"🤖" },
  chapters: [

  // ---------- CHAPITRE 0 : Bienvenue ----------
  { id:0, title:"Bienvenue dans ton usine", sub:"Rencontre ton équipe", emoji:"🏭",
    ready:true, badge:{emoji:"🚀", name:"Aventurier·e", bonus:50},
    steps:[
      {type:'story', emoji:"🤖", wiggle:true, kicker:"Ton aventure commence",
       title:`Salut ! Moi c'est <span class="g">Nono</span> 🤖`,
       msg:`Je vais te guider pas à pas pour ouvrir ton usine à publications. Prêt·e ?`,
       say:`Suis-moi, tu vas voir, c'est facile et rapide !`,
       btns:[{label:"C'est parti 🚀", cls:"primary"}]},

      {type:'story', emoji:"🏭", wiggle:true, kicker:"Le grand objectif",
       title:`Une usine qui publie <span class="g">à ta place</span>`,
       msg:`Sur Instagram. Toute seule. Même quand ton ordinateur est éteint.`,
       say:`Et le meilleur : elle est <b>gratuite</b> à faire tourner.`,
       btns:[{label:"Trop bien, la suite →", cls:"primary"}]},

      {type:'story', emoji:"🤝", kicker:"Chapitre 0",
       title:`On va embaucher <span class="g">3 robots</span>`,
       msg:`Ils ne dorment jamais et ne coûtent rien. Je te les présente ?`,
       say:`Ce sont tes futurs employés. Tu vas les adorer.`,
       btns:[{label:"Présente-les moi", cls:"primary"}]},

      {type:'meet', emoji:"🎨", wiggle:true, kicker:"Robot 1 sur 3",
       title:`Le <span class="g">Dessinateur</span>`,
       msg:`Il fabrique tes belles images de publication. Toi tu écris l'idée, lui il dessine.`,
       say:`Zéro logiciel de design à apprendre. Cool, non ?`,
       btns:[{label:"Robot suivant →", cls:"gold"}]},

      {type:'meet', emoji:"📱", wiggle:true, kicker:"Robot 2 sur 3",
       title:`Le <span class="g">Messager</span>`,
       msg:`Quand une publication est prête, il te fait « ding ! » sur ton téléphone : « On publie ? »`,
       say:`C'est toi qui décides. Toujours.`,
       btns:[{label:"Robot suivant →", cls:"gold"}]},

      {type:'meet', emoji:"📮", wiggle:true, kicker:"Robot 3 sur 3",
       title:`Le <span class="g">Facteur</span>`,
       msg:`Tu réponds « oui », et hop — il poste sur Instagram. Voilà, c'est en ligne.`,
       say:`Trois robots, un seul chef : toi 👑`,
       btns:[{label:"Voir mon usine complète", cls:"gold"}]},

      {type:'story', emoji:"", kicker:"Ton équipe est prête", flow:true,
       title:`Voilà ton <span class="g">usine</span> !`,
       msg:`Le Dessinateur prépare → le Messager te prévient → tu valides 👑 → le Facteur publie.`,
       say:`Tu as tout compris ! Passons à la construction.`,
       btns:[{label:"Terminer le chapitre 🏆", cls:"green"}]},
    ]},

  // ---------- CHAPITRE 1 : Tes clés (les comptes) ----------
  { id:1, title:"Tes clés", sub:"Créer (ou retrouver) tes comptes", emoji:"🔑",
    ready:true, badge:{emoji:"🗝️", name:"Gardien·ne des clés", bonus:60},
    steps:[
      {type:'story', emoji:"🔑", wiggle:true, kicker:"Chapitre 1",
       title:`Il te faut quelques <span class="g">clés</span>`,
       msg:`Pour ouvrir l'usine : une adresse email, Instagram, Facebook et GitHub. Mais tu en as peut-être déjà !`,
       say:`On va cocher ensemble ce que tu as déjà, pour ne rien refaire.`,
       btns:[{label:"Voyons ça", cls:"primary"}]},

      // EMAIL
      {type:'branch', emoji:"📧", kicker:"Ta clé n°1",
       title:`As-tu une <span class="g">adresse email</span> que tu regardes tous les jours ?`,
       say:`Gmail, Outlook, celle de ton entreprise… tout compte.`,
       btns:[
         {label:"✅ Oui, j'en ai une", cls:"ghost", points:5, skip:1},
         {label:"❌ Non, pas vraiment", cls:"ghost"}
       ]},
      {type:'action', emoji:"📨", kicker:"Mission · action",
       title:`Crée une adresse <span class="g">Gmail</span>`,
       msg:`Va sur gmail.com → « Créer un compte ». Choisis une adresse sérieuse (ex. contact.tonentreprise@gmail.com).`,
       say:`Prends bien note du mot de passe dans un carnet !`,
       hint:`Google demandera ton numéro de téléphone pour t'envoyer un code — c'est normal.`,
       btns:[{label:"C'est fait ✓", cls:"green", points:10}]},

      // INSTAGRAM
      {type:'branch', emoji:"📷", kicker:"Ta clé n°2",
       title:`As-tu déjà un <span class="g">compte Instagram</span> pour ton activité ?`,
       say:`Beaucoup de gens en ont déjà un — c'est un bon point !`,
       btns:[
         {label:"✅ Oui, j'en ai un", cls:"ghost", points:5, skip:1},
         {label:"❌ Non, pas encore", cls:"ghost"}
       ]},
      {type:'action', emoji:"📲", kicker:"Mission · action",
       title:`Installe <span class="g">Instagram</span>`,
       msg:`Sur ton téléphone, ouvre le magasin d'applis, cherche « Instagram », installe-le et crée ton compte avec ton email.`,
       say:`Mets une photo de profil et une petite phrase qui dit ce que tu fais 😊`,
       hint:`App Store pour iPhone · Play Store pour Android.`,
       btns:[{label:"C'est fait ✓", cls:"green", points:10}]},

      {type:'branch', emoji:"💼", kicker:"Petit réglage important",
       title:`Ton Instagram est-il en <span class="g">« compte professionnel »</span> ?`,
       msg:`(Tu vois un bouton « Tableau de bord professionnel » sur ton profil ?)`,
       say:`Ce réglage est <b>obligatoire</b> pour que l'usine puisse publier.`,
       btns:[
         {label:"✅ Oui, déjà fait", cls:"ghost", points:5, skip:1},
         {label:"❌ Non / je ne sais pas", cls:"ghost"}
       ]},
      {type:'action', emoji:"🔧", kicker:"Mission · action",
       title:`Passe en <span class="g">compte professionnel</span>`,
       msg:`Dans Instagram : Profil → menu ☰ → Paramètres → « Passer à un compte professionnel » → choisis « Entreprise ».`,
       say:`Quand il propose de connecter Facebook, choisis « Ignorer » — on le fera plus tard, au bon moment.`,
       btns:[{label:"C'est fait ✓", cls:"green", points:10}]},

      // FACEBOOK
      {type:'branch', emoji:"👥", kicker:"Ta clé n°3",
       title:`As-tu un <span class="g">compte Facebook</span> (même inutilisé) ?`,
       say:`Il servira juste de « badge d'accès » chez Meta. Il restera vide, c'est normal.`,
       btns:[
         {label:"✅ Oui, j'en ai un", cls:"ghost", points:5, skip:1},
         {label:"❌ Non", cls:"ghost"}
       ]},
      {type:'action', emoji:"📘", kicker:"Mission · action",
       title:`Crée un compte <span class="g">Facebook</span>`,
       msg:`Sur facebook.com → « Créer un compte ». Utilise ton vrai nom et l'email du projet.`,
       say:`Ce compte ne postera jamais rien. C'est juste ta clé d'entrée chez Meta.`,
       btns:[{label:"C'est fait ✓", cls:"green", points:10}]},

      // GITHUB
      {type:'branch', emoji:"🐙", kicker:"Ta clé n°4",
       title:`As-tu déjà un compte <span class="g">GitHub</span> ?`,
       say:`La plupart des gens n'en ont pas — c'est totalement normal.`,
       btns:[
         {label:"✅ Oui", cls:"ghost", points:5, skip:1},
         {label:"❌ Non", cls:"ghost"}
       ]},
      {type:'action', emoji:"🏢", kicker:"Mission · action",
       title:`Crée ton compte <span class="g">GitHub</span>`,
       msg:`Sur github.com → « Sign up ». Email du projet, mot de passe, et choisis le plan gratuit (« Free »).`,
       say:`GitHub, c'est le bâtiment gratuit où vivront tes 3 robots.`,
       hint:`GitHub t'envoie un code à 8 chiffres par email pour confirmer — va le chercher dans ta boîte.`,
       btns:[{label:"C'est fait ✓", cls:"green", points:10}]},

      // APP GITHUB
      {type:'action', emoji:"🔔", kicker:"Dernière clé",
       title:`Installe l'<span class="g">app GitHub</span> sur ton téléphone`,
       msg:`C'est ta télécommande : c'est là que tu diras « oui, publie ! » depuis ton canapé.`,
       say:`Quand elle demande les notifications, dis OUI — c'est le Messager qui te préviendra.`,
       btns:[{label:"C'est fait ✓", cls:"green", points:10}]},

      {type:'story', emoji:"🎯", kicker:"Récap",
       title:`Tes clés sont <span class="g">prêtes</span> !`,
       msg:`Email ✓ · Instagram pro ✓ · Facebook ✓ · GitHub ✓ · app sur ton téléphone ✓`,
       say:`Excellent travail ! Le plus administratif est derrière toi.`,
       btns:[{label:"Terminer le chapitre 🏆", cls:"green"}]},
    ]},

  // ---------- CHAPITRES À VENIR (affichés « Bientôt » sur la carte) ----------
  { id:2, title:"Ton style", sub:"Tes couleurs, ton logo, tes slides", emoji:"🎨", ready:false, badge:{emoji:"🖌️", name:"Artiste"} },
  { id:3, title:"Les clés magiques de Meta", sub:"Le sésame qui publie pour toi", emoji:"🗝️", ready:false, badge:{emoji:"🔓", name:"Passe-partout"} },
  { id:4, title:"L'étagère à images", sub:"Héberger tes visuels, gratuitement", emoji:"📦", ready:false, badge:{emoji:"📚", name:"Rangé·e"} },
  { id:5, title:"Ta première publication", sub:"Le grand moment 🎉", emoji:"🚀", ready:false, badge:{emoji:"🥇", name:"Première fois"} },
  { id:6, title:"L'usine qui tourne seule", sub:"Ordinateur éteint, ça publie", emoji:"☁️", ready:false, badge:{emoji:"🏭", name:"Patron·ne d'usine"} },
  { id:7, title:"Faire vivre ton usine", sub:"Créer TON contenu · dépannage", emoji:"⚙️", ready:false, badge:{emoji:"🎓", name:"Diplômé·e"} },

]};
