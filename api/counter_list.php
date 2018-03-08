<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->prepare('SELECT * FROM counter', array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute();
  $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);

  $counterAr = array();
  foreach ($comments as $key => $value) {
    $counterAr[$value['system']] = $value['count'];
  }

  echo '[{"system": "counter_likes", "count": "'.$counterAr['likes'].'"},{"system": "counter_followers", "count": "'.$counterAr['followers'].'"}]';
}
catch(Exception $e) {
   echo 'error: '.$e->getMessage();
}
