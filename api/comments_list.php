<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->prepare('SELECT * FROM comments', array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute();
  $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);

  $out = array_values($comments);
  echo json_encode($out);
}
catch(Exception $e) {
   echo 'error: '.$e->getMessage();
}
