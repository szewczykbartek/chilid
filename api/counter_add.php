<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=paraboli_chilid', 'paraboli_admin', 'admin312');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->prepare("INSERT INTO counter (system, count) VALUES (:system, :count)");
  $stmt->execute(array(
    'system' => 'followers',
    'count' => 0
  ));

  echo '{"status":"ok"}';
}
catch(Exception $e) {
  echo '{"status":"error"}';
}
?>
