#Développement d’un JEU 2048 sous forme d’application web en HTML / CSS / JavaScript.

Préparation : Créez un compte sur scrimba.com ; familiarisez-vous avec le site web en créant un screencast (vous devez avoir un microphone et un casque audio fonctionnels). Montrez le screencast pour prouver que votre installation est fonctionnelle.
Trouvez des sites internet ayant des ressources pédagogiques en français ou en anglais portant sur les thèmes HTML CSS et JavaScript. Quelques exemples:



Openclassrooms
 developpez.net develpoppez.com
 pierre-giraud.com 
 w3schools
 fun-mooc
 learnjs.org
 cssdebutant.com
 html.com
 codecombat
 Codecademy
 stackoverflow (questions réponses)




Défi 1: EN HTML uniquement: afficher un tableau 4 fois 4 (sans traits ou bordures) avec des étoiles dans chaque case.

Défi 2: En HTML et CSS: afficher un titre en utilisant la balise h1 au dessus du tableau de couleur rouge. Vous devez utiliser le CSS pour configurer la couleur rouge, pas l’HTML. 

Défi 3: En JavaScript : afficher “bonjour” dans la console.

Défi 4: Afficher des bordures noires autour des cases du tableau en CSS. Ne pas modifier l’HTML mais uniquement le CSS pour afficher ces bordures.

Défi 5: Agrandir les cases du tableau avec une taille fixe en CSS (pas en HTML). Le tableau doit être confortable pour jouer. Essayez d’afficher des cases carrées (et non rectangulaires).
Défi 6: Attention, défi difficile (enfin, pour les débutants :) - En JavaScript: Afficher “haut” dans la console à chaque fois qu’on appuie sur la touche “haut” du clavier. Indice: ne pas utiliser la balise “body” en HTML (ou même une autre balise) mais utilisez plutôt “document” en JavaScript directement.

Défi 7: De même, afficher “bas” “droite” “gauche” dans la console à chaque fois qu’on appuie sur les touches correspondantes.

Défi 8: En JavaScript, écrire une fonction test1() qui affiche dans la console “test 1”. Cette fonction n’a pas de valeur retournée (c’est à dire pas de return). Exécuter cette fonction test1() à chaque fois qu’on appuie sur la touche “t” du clavier. Pour tester, appuyez trois fois sur la touche “t”, dans la console s’affichera trois fois “test 1”

Défi 9: En JavaScript, écrire une fonction test2() qui change le texte du titre (celui affiché en rouge du défi 2). Cette fonction n’a pas de valeur retournée (c’est à dire pas de return). Exécuter cette fonction test2() à chaque fois qu’on appuie sur la touche “t” du clavier. Pour tester, affichez d’abord la page avec le titre original, puis appuyez sur la touche “t” et observez que le titre change avec un nouveau texte.

SCREENCAST Défi 9: enregistrer un screencast avec scrimba qui explique le Défi 9 en montrant ce que vous avez fait pour que ce défi fonctionne dans le fichier HTML et surtout dans le fichier JavaScript. Publiez-le et envoyez le lien URL de partage de ce screencast sur le forumulaire https://forms.gle/D1fMdqtdam53JCiXA 

Défi 10: En HTML, écrivez en dessous du tableau  “score =” .  Utilisez ensuite une balise de type DIV juste après le texte “score = ” pour afficher un score de 0. 

Défi 11: En JavaScript, écrire une fonction test3() qui ajoute 1 au score et qui affiche la nouvelle valeur du score dans la balise DIV située juste après le texte “score = “. Cette fonction n’a pas de valeur retournée (c’est à dire pas de return). Exécuter cette fonction test3() à chaque fois qu’on appuie sur la touche “t” du clavier. Observez qu’à chaque fois que vous appuyez sur la touche “t”, le score augmente de 1.

Défi 12: En JavaScript, écrire une fonction test4() qui affiche dans la console le texte contenu dans la première case du tableau (celle qui a pour indice 0,0). Cette fonction n’a pas de valeur retournée (c’est à dire pas de return). Exécuter cette fonction test4() à chaque fois qu’on appuie sur la touche “t” du clavier. Observez qu’à chaque fois que vous appuyez sur la touche “t”, le texte de la première case du tableau est affiché. Changez le texte de la première case du tableau dans l’HTML et vérifiez que ce texte est bien affiché dans la console également, comme précédemment.
 Indice 12: vous pouvez utiliser un identifiant pour le tableau (par exemple <table id=”mytable”>)  puis var t = document.getElementById(&apos;myTable&apos;);  et enfin t.rows[0].cells[0].innerHTML
 
Défi 13: En JavaScript, écrire une fonction test5() qui modifie le texte contenu dans la première case du tableau (celle qui a pour indice 0,0). Par exemple, au début le texte est “*” et il sera changé en “#”. Exécuter cette fonction test5() à chaque fois qu’on appuie sur la touche “t” du clavier. Utilisez l’indice 12. 

Défi 14: En JavaScript, écrire une fonction getValue(i,j) qui va retourner le texte contenu dans la case du tableau ayant pour indice i et j (Utilisez l’indice 12). Ecrire ensuite une fonction test6() qui va tester cette fonction avec getValue(0,0) getValue(1,1) getValue(2,2) getValue(3,3) et afficher les trois retours de résultat dans la console. Appelez test6() à chaque fois qu’on appuie sur la touche “t” du clavier. Modifiez ensuite l’HTML pour changer les valeurs des cases ayant pour indice 0,0 et 1,1 et 2,2 et 3,3 en mettant par exemple le caractère “A” dans 0,0 le caractère “B” dans 1,1 le caractère “C” dans 2,2 et le caractère “D” dans 3,3 puis testez pour voir si le contenu des trois cases est bien retourné par la fonction getValue(i,j)

Défi 15: En JavaScript, écrire une fonction setValue(i,j,val) qui ne retourne rien et qui modifie le texte contenu dans la case du tableau ayant pour indice i et j en mettant la valeur val (Utilisez l’indice 12). Ecrire ensuite une fonction test7() qui va tester cette fonction avec setValue(0,0,”P”) setValue(1,1,”Q”) setValue(2,2;”R”) setValue(3,3,”S”). Appelez test7() à chaque fois qu’on appuie sur la touche “t” du clavier.  Remarquez que les trois cases en diagonale se modifient quand on appuie sur la touche “t”. 

Défi 16: En JavaScript, écrire une fonction showRow(i) qui va afficher le texte de toutes les cases de la ligne i (Row en anglais veut dire ligne). Pour cela pour utiliserez getValue(i,j) pour obtenir les valeurs des cases de la ligne. Vous utiliserez aussi une boucle for qui va parcourir toutes les cases de la ligne en question grâce à la variable j qui varie de 0 jusqu’au nombre de cases de la ligne - 1. Enfin, écrire une fonction test8() qui va tester cette fonction avec showRow(0) showRow(1) showRow(2) et showRow(3) et qui sera exécutée à chaque fois qu’on appuie sur la touche “t” du clavier. Modifiez ensuite des éléments dans l’HTML pour vérifier que tout fonctionne correctement. Par exemple, changez la case 0,0 avec le texte “M” , la case 0,1 avec le texte “N”, la case 0,2 avec le texte “O” et la case 0,3 avec le texte “P” et regardez si showRow(0) affiche bien les valeurs “M”  “N”  “O”  “P”.

Défi 17: En JavaScript, écrire une fonction showCol(j) qui va afficher le texte de toutes les cases de la colonne j. Pour cela pour utiliserez getValue(i,j) pour obtenir les valeurs des cases de la ligne. Vous utiliserez aussi une boucle for qui va parcourir toutes les cases de la colonne en question grâce à la variable i qui varie de 0 jusqu’au nombre de cases de la colonne - 1. Enfin, écrire une fonction test9() qui va tester cette fonction avec showCol(0) showCol(1) showCol(2) et showCol(3) et qui sera exécutée à chaque fois qu’on appuie sur la touche “t” du clavier. Modifiez ensuite des éléments dans l’HTML pour vérifier que tout fonctionne correctement. Par exemple, changez la case 0,0 avec le texte “E” , la case 1,0 avec le texte “F”, la case 2,0 avec le texte “G” et la case 3,0 avec le texte “H” et regardez si showCol(0) affiche bien les valeurs “E”  “F”  “G”  “H”.

Défi 18: En JavaScript, écrire une fonction setRow(i,a,b,c,d) qui va mettre, pour la ligne i, les quatre valeurs a b c d respectivement dans les cases ayant pour indice i,0 puis  i,1 puis  i,2 puis i,3 . Pour cela, vous utiliserez la fonction setValue(i,j,val). Ecrire une fonction test10() qui va tester cette fonction avec setRow(0,1,2,3,4) setRow(1,5,6,7,8) setRow(2,9,10,11,12) et setRow(3,13,14,15,16) et qui sera exécutée à chaque fois qu’on appuie sur la touche “t” du clavier. 

SCREENCAST Défi 18: enregistrer un screencast avec scrimba qui explique le Défi 18 en montrant ce que vous avez fait pour que ce défi fonctionne dans le fichier HTML et surtout dans le fichier JavaScript. Publiez-le et envoyez le lien URL de partage de ce screencast sur le forumulaire https://forms.gle/D1fMdqtdam53JCiXA 
