<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
				<link rel="stylesheet" type="text/css" href="style.css">
				</head>
				<body>
					<div id="myDIV" class="header">
						<h2 style="margin:5px">To Do List</h2>
						<input type="text" id="myInput" placeholder="Title..." onkeyup="calculateTotal()">
							<span onclick="newElement()" class="addBtn">Add</span>
						</div>
						<ul id="myUL" class="list">
							<?php include 'get.php'; ?>
						</ul>
						<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
						<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
						<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
						<script type='text/javascript' src='js.js'></script>
					</body>
				</html>
