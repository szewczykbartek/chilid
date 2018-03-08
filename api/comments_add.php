<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->prepare("INSERT INTO comments (name, text) VALUES (:name, :text)");
  $stmt->execute(array(
    'name' => 'Bartek Szewczyk',
    'text' => $_GET['text']
  ));

  echo '{"status":"ok"}';
}
catch(Exception $e) {
  echo '{"status":"error"}';
}
?>
