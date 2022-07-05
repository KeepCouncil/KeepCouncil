cp /tmp/pg_hba.conf /var/lib/postgresql/data/pg_hba.conf
rm -rf /var/lib/postgresql/data/pg_stat_tmp/global.stat
psql -f /tmp/init.sql
