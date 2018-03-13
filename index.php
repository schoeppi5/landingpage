<?php
	include("./script/db-login.php");
	include("./include/head.html");
?>
			<script src="script/index.js"></script>
			<div class="container content">
				<?php
					$statment = $pdo->query("SELECT * FROM entries");
					while($entry = $statment->fetch())
					{
						$date = new DateTime($entry["releaseDate"]);
						$date = $date->format('d.m.Y');
						echo '
						<div class="entry">
							<div class="entry-head">
								<iframe src="'.$entry["url"].'"></iframe>
							</div>
							<div class="entry-main">
								<span class="entry-heading">'.$entry["name"].'</span>
								<div class="entry-release"><span class="entry-release-caption">Release:</span>'.$date.'</div>
								<span class="entry-description-caption">Description:</span>
								<div class="entry-description">
									<p>
										'.$entry["description"].'
									</p>
								</div>
							</div>
							<a href="'.$entry["url"].'" class="entry-link" target="_blank">Visit</a>
						</div>';
					}
				?>
			</div>
		</div>
		<footer>
			<div class="col col-left">
				<span>test</span>
			</div>
			<div class="col col-middle">
				<span>middle</span>
			</div>
			<div class="col col-right">
				<span>Philipp Schöppner&copy;2018</span>
			</div>
		</footer>
	</body>
</html>