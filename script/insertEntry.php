<?php
	include("db-login.php");
	
	$content = $_POST["content"];
	$cmd = $_POST["cmd"];
	
	$response;
	
	if($cmd == "insert")
	{
		$statement = $pdo->prepare("INSERT INTO entries (url, name, releaseDate, description) VALUES (:url, :name, :date, :desc)");
		$result = $statement->execute(array('url' => $content[0], 'name' => $content[1], 'date' => date("Y-m-d"), 'desc' => $content[2]));
			
		if($result)
		{
			$response = array(
				'status' => 'success',
				'code' => 0);
		}
		else
		{
			$response = array(
				'status' => 'failed',
				'code' => 1);
		}
	}
	else
	{
		$statement = $pdo->prepare("DELETE FROM entries WHERE url = :url");
		$result = $statement->execute(array('url' => $content[0]));
		
		if($result)
		{
			$response = array(
				'status' => 'success',
				'code' => 0);
		}
		else
		{
			$response = array(
				'status' => 'failed',
				'code' => 1);
		}
	}
	
	echo json_encode($response);
?>