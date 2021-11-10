<?php

namespace Fency\DB;

class DB extends \SQLite3
{
    public function __construct()
    {
        $this->open('../db/db_fency.db');
        $this->exec("PRAGMA foreign_keys = ON");
    }
}